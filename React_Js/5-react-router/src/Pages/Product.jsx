import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Main Product </h1>
      <ul>
        <Link to="/productDetail/23457689">Product One</Link>
      </ul>
      <ul>
        <Link to="/productDetail/adsfgd">Product Two</Link>
      </ul>
      <ul>
        <Link to="/productDetail/ahjklkjhgdf">Product Three</Link>
      </ul>
      <ul>
        <Link to="/productDetail/asdfdghdfsfghf">Product Three</Link>
      </ul>
    </div>
  );
}

export default Product;
