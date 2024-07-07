import React, { memo, useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../frontend-assets/css/blog-home.css";
import "../../frontend-assets/css/bootstrap.min.css";
import { useQuery } from "react-query";
import { CategoryService } from "../../Services/categories.service";
import FirstTenCategory from "../../Components/FirstTenCategory/FirstTenCategory";
import FirstFiveCategory from "../../Components/FirstFiveCategory/FirstFiveCategory";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../utils/constants";
import { AuthService } from "../../utils/auth.service";
import CustomButton from "../../Components/CustomButton/CustomButton";

function FrontendDeveloper() {
  const { data: categoryRequest, isLoading: categoryLoader } = useQuery(
    "category",
    CategoryService.getCategory
  );

  const firstFiveCategoryData = useMemo(
    () => categoryRequest?.data?.results.splice(0, 5),
    [categoryRequest]
  );

  const firstTenCategoryData = useMemo(
    () => categoryRequest?.data?.results.splice(0, 10),
    [categoryRequest]
  );

  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <CustomButton
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </CustomButton>
            <Link to={UNAUTHENTICATED_ROUTES.HOME} className="navbar-brand">
              Home
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <FirstFiveCategory
              firstFiveCategoryData={firstFiveCategoryData}
              categoryLoader={categoryLoader}
            />
            <Link
              className="navbar-brand"
              onClick={() => {
                window.location.href = AUTHENTICATED_ROUTES.DASHBOARD;
              }}
            >
              Dashboard
            </Link>
            {AuthService.isUserLoggedIn() ? (
              <Link
                className="navbar-brand"
                onClick={() => {
                  AuthService.removeToken();
                  window.location.href = UNAUTHENTICATED_ROUTES.LOGIN;
                }}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to={UNAUTHENTICATED_ROUTES.REGISTER}
                  className="navbar-brand"
                >
                  Register
                </Link>
                <Link
                  to={UNAUTHENTICATED_ROUTES.LOGIN}
                  className="navbar-brand"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-8 BlogPagePadding">
            <Outlet />
          </div>

          <div className="col-md-4">
            <div className="well">
              <h4>Blog Search</h4>
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-btn">
                    <CustomButton className="btn btn-default" type="submit">
                      <span className="glyphicon glyphicon-search"></span>
                    </CustomButton>
                  </span>
                </div>
              </form>
            </div>

            <div className="well">
              <h4>Blog Categories</h4>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <FirstTenCategory
                      firstTenCategoryData={firstTenCategoryData}
                      categoryLoader={categoryLoader}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
      </div>

      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.min.js"></script>
    </>
  );
}
export default memo(FrontendDeveloper);
