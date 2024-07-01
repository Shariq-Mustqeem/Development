import React, { memo, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../utils/constant";
import { useQuery } from "react-query";
import { CategoryService } from "../../services/categories.service";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../utils/auth.service";
import "../../frontend-assets/css/bootstrap.min.css";
import "../../frontend-assets/css/blog-home.css";

function FrontendDeveloper() {
  const { data: categoryData } = useQuery("categories", () =>
    CategoryService.getCategory()
  );

  const firstFiveCategories = useMemo(
    () => categoryData?.data?.results.splice(0, 5),
    [categoryData]
  );

  const firstTenCategories = useMemo(
    () => categoryData?.data?.results.splice(0, 10),
    [categoryData]
  );

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    navigate(
      UNAUTHENTICATED_ROUTES?.SEARCH_DETAIL.replace(":query", searchInput)
    );
  };
  const searchInputChangeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <>
      {/* <!-- Navigation --> */}
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={UNAUTHENTICATED_ROUTES.HOME}>
              Home
            </Link>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {firstFiveCategories?.length > 0 &&
                firstFiveCategories?.map((singleCategory) => {
                  return (
                    <li key={singleCategory?.cat_id}>
                      <Link
                        to={UNAUTHENTICATED_ROUTES.CATEGORY_DETAIL.replace(
                          ":catId",
                          singleCategory?.cat_id
                        )}
                      >
                        {singleCategory.cat_title}
                      </Link>
                    </li>
                  );
                })}
              {AuthService.isUserLoginIn() ? (
                <>
                  <li>
                    <Link to={AUTHENTICATED_ROUTES.DASHBOARD}>Dashboard</Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      onClick={() => {
                        AuthService.removeToken();
                        window.location.href = UNAUTHENTICATED_ROUTES.LOGIN;
                      }}
                    >
                      logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={UNAUTHENTICATED_ROUTES.REGISTER}>Register</Link>
                  </li>
                  <li>
                    <Link to={UNAUTHENTICATED_ROUTES.LOGIN}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Page Content --> */}
      <div className="container">
        <div className="row">
          {/* <!-- Blog Entries Column --> */}
          <div
            className="col-md-8"
            style={{
              paddingTop: 70,
            }}
          >
            <Outlet />
          </div>

          {/* <!-- Blog Sidebar Widgets Column --> */}
          <div className="col-md-4">
            {/* <!-- Blog Search Well --> */}
            <div className="well">
              <h4>Blog Search</h4>
              <form onSubmit={searchSubmitHandler}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={searchInputChangeHandler}
                    value={searchInput}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default"
                      type="submit"
                      disabled={!Boolean(searchInput)}
                    >
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
            </div>

            {/* <!-- Blog Categories Well --> */}
            <div className="well">
              <h4>Blog Categories</h4>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    {firstTenCategories?.length > 0 &&
                      firstTenCategories?.map((singleCategory) => (
                        <li key={singleCategory?.cat_id}>
                          <Link
                            to={UNAUTHENTICATED_ROUTES.CATEGORY_DETAIL.replace(
                              ":catId",
                              singleCategory?.cat_id
                            )}
                          >
                            {singleCategory.cat_title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                {/* <!-- /.col-lg-6 --> */}
                {/* <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Category Name</a>
                    </li>
                    <li>
                      <a href="/">Category Name</a>
                    </li>
                    <li>
                      <a href="/">Category Name</a>
                    </li>
                    <li>
                      <a href="/">Category Name</a>
                    </li>
                  </ul>
                </div> */}
                {/* <!-- /.col-lg-6 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>

            {/* <!-- Side Widget Well --> */}
            <div className="well">
              <h4>Side Widget Well</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, perspiciatis adipisci accusamus laudantium odit
                aliquam repellat tempore quos aspernatur vero.
              </p>
            </div>
          </div>
        </div>
        <hr />

        {/* <!-- Footer --> */}
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
            {/* <!-- /.col-lg-12 --> */}
          </div>
          {/* <!-- /.row --> */}
        </footer>
      </div>
      {/* <!-- /.container --> */}

      {/* <!-- jQuery --> */}
      <script src="js/jquery.js"></script>

      {/* <!-- Bootstrap Core JavaScript --> */}
      <script src="js/bootstrap.min.js"></script>
    </>
  );
}
export default memo(FrontendDeveloper);
