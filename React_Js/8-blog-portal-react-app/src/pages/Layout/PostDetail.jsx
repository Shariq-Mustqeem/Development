/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { memo, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsService } from "../../services/post.service";
import { useQuery } from "react-query";
import { Spin } from "antd";
import { helperService } from "../../utils/helper";
import { UNAUTHENTICATED_ROUTES } from "../../utils/constant";

function PostDetail() {
  const { postId } = useParams();

  const { data: catPostById, isLoading: catPostDataLoader } = useQuery(
    ["categroyById", postId],
    () => PostsService.getPostById(postId),
    {
      enabled: Boolean(postId),
    }
  );
  const singlePostData = useMemo(
    () => catPostById?.data?.results,
    [catPostById]
  );

  return (
    <Spin spinning={catPostDataLoader}>
      <div>
        <h1>{singlePostData?.post_title}</h1>
        <p className="lead">
          Post by <a href="/">{singlePostData?.post_author}Post Author</a>
        </p>
        <hr />
        <p>
          <span className="glyphicon glyphicon-time"></span> Posted on{" "}
          {helperService?.convertDateFormate(singlePostData?.post_date)}
        </p>
        <hr />
        <Link
          to={UNAUTHENTICATED_ROUTES.POST_DETAIL.replace(
            ":postId",
            singlePostData?.id
          )}
        ></Link>
        {singlePostData?.image ? (
          <img src={singlePostData?.image} alt="" />
        ) : (
          <img
            className="img-responsive"
            src="http://placehold.it/900x300"
            alt=""
          />
        )}

        <img className="img-responsive" src="/" alt="" />
        <hr />

        <p className="lead">{singlePostData?.post_content}</p>
        <hr />
        <div className="well">
          <h4>Leave a Comment:</h4>
          <form role="form">
            <div className="form-group">
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <hr />
        <div className="media">
          <a className="pull-left" href="/">
            <img
              className="media-object"
              src="http://placehold.it/64x64"
              alt=""
            />
          </a>
          <div className="media-body">
            <h4 className="media-heading">
              Start Bootstrap
              <small>August 25, 2014 at 9:30 PM</small>
            </h4>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
      </div>
    </Spin>
  );
}

export default memo(PostDetail);
