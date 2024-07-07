import React, { memo, useMemo } from "react";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { useQuery } from "react-query";
import { PostService } from "../../Services/post.service";
import { Spin } from "antd";

function HomePage() {
  const { data: postListing, isLoading: postloader } = useQuery(
    "posts",
    PostService.getPost
  );

  const postData = useMemo(() => postListing?.data?.results, [postListing]);
  console.log(postData, "postData");
  if (postloader) {
    return <h2>Loading....</h2>;
  }
  return (
    <Spin spinning={postloader}>
      <div>
        <h1 className="page-header">Blog Post</h1>
        {postData?.length > 0
          ? postData.map((singlePost, index) => (
              <SinglePost key={index} singlePost={singlePost} />
            ))
          : !postloader && <h1>Post not Found</h1>}
      </div>
    </Spin>
  );
}

export default memo(HomePage);
