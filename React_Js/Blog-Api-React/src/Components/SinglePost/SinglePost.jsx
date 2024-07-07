import React, { memo } from "react";
import { helperService } from "../../utils/helper";

function SinglePost({ singlePost }) {
  return (
    <>
      <h2 key={singlePost.post_title}>
        <a href="/">{singlePost.post_title}</a>
      </h2>
      <p className="lead">
        by <a href="index.php">{singlePost.post_author}</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on &nbsp;{" "}
        {helperService.convertDateFormate(singlePost.post_date)}
      </p>
      <hr />
      {singlePost?.image ? (
        <img src={singlePost?.image} alt="images error" />
      ) : (
        <img
          className="img-responsive"
          src="http://placehold.it/900x300"
          alt=""
        />
      )}
      <hr />
      <p>{singlePost?.post_content}</p>
      <a className="btn btn-primary" href="/">
        Read More <span className="glyphicon glyphicon-chevron-right"></span>
      </a>
      <hr />
    </>
  );
}

export default memo(SinglePost);
