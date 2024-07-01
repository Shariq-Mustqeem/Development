import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  // console.log(id, "id");
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>Product id is {id}</p>
    </div>
  );
}

export default ProductDetail;
