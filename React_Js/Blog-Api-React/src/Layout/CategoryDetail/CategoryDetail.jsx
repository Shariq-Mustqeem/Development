import React, { memo, useMemo } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CategoryService } from "../../Services/categories.service";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { Spin } from "antd";

function CategoryDetail() {
  const { catId } = useParams();
  const { data: categoryToCategory, isLoading: categoryToCategoryLoader } =
    useQuery(
      ["categoryById", catId],
      () => CategoryService.getCategoryById(catId),
      {
        enabled: Boolean(catId),
      }
    );

  const categoryToCategoryData = useMemo(
    () => categoryToCategory?.data?.results,
    [categoryToCategory]
  );
  return (
    <Spin spinning={categoryToCategoryLoader}>
      <div>
        <h1 className="page-header">Category Detail</h1>
        {categoryToCategoryData?.postListing?.length > 0
          ? categoryToCategoryData?.posts.map((singlePost, index) => (
              <SinglePost key={index} singlePost={singlePost} />
            ))
          : !categoryToCategoryLoader && <h1>Post not Found</h1>}
      </div>
    </Spin>
  );
}

export default memo(CategoryDetail);
