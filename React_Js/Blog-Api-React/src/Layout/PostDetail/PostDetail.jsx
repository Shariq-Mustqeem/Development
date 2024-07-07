/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { memo } from "react";
import CustomPostDetail from "../../Components/CustomPostDetail/CustomPostDetail";

function PostDetail() {
  return (
    <>
      <CustomPostDetail />
    </>
  );
}

export default memo(PostDetail);
