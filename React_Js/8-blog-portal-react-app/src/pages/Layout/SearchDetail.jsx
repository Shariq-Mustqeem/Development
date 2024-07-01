import React, { memo, useMemo } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SerachService } from "../../services/search.service";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { Spin } from "antd";

function SearchDetail() {
  const { query } = useParams();

  const { data: searchPostData, isLoading: serachPostLoader } = useQuery(
    ["search", query],
    () => SerachService.serachPost({ query_custom: query }),
    {
      enabled: Boolean(query),
    }
  );

  const singlePostDeatilData = useMemo(
    () => searchPostData?.data?.results,
    [searchPostData]
  );

  return (
    <Spin spinning={serachPostLoader}>
      {singlePostDeatilData?.length > 0
        ? singlePostDeatilData?.map((singlePost, index) => (
            <SinglePost key={index} singlePost={singlePost} />
          ))
        : !serachPostLoader && <h1>Search Post Not Found</h1>}
    </Spin>
  );
}

export default memo(SearchDetail);
