/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { memo } from "react";
import CustomButton from "../CustomButton/CustomButton";

function CustomPostDetail() {
  return (
    <div>
      <h1>post_title</h1>
      <p className="lead">
        Post by <a href="/">Post Author</a>
      </p>
      <hr />
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on{" "}
      </p>
      <hr />
      <img
        className="img-responsive"
        src="http://placehold.it/900x300"
        alt=""
      />

      <img className="img-responsive" src="/" alt="" />
      <hr />

      <p className="lead">post_content</p>
      <hr />
      <div className="well">
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div className="form-group">
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <CustomButton type="submit" className="btn btn-primary">
            Submit
          </CustomButton>
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
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    </div>
  );
}

export default memo(CustomPostDetail);
