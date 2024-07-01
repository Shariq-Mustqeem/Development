import React, { memo, useMemo } from "react";
import { useQuery } from "react-query";
import { CategoryService } from "../../services/categories.service";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

function CategoryDetail() {
  const { catId } = useParams();
  const { data: catDataById, isLoading: catDataLoader } = useQuery(
    ["categroyById", catId],
    () => CategoryService.getCategoryById(catId),
    {
      enabled: Boolean(catId),
    }
  );
  const singleCategoryData = useMemo(
    () => catDataById?.data?.results,
    [catDataById]
  );

  return (
    <Spin spinning={catDataLoader}>
      <div>
        {singleCategoryData?.posts?.length > 0
          ? singleCategoryData?.posts?.map((singlePost) => (
              <SinglePost singlePost={singlePost} />
            ))
          : catDataLoader}{" "}
        && <h1>categories not found</h1>
      </div>
    </Spin>
  );
}

export default memo(CategoryDetail);
