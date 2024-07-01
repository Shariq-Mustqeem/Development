import React, { memo } from "react";
import { useQuery } from "react-query";
import { PostsService } from "../../services/post.service";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { Spin } from "antd";

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery("posts", () =>
    PostsService.getPost()
  );
  const postData = posts?.data?.results;
  return (
    <Spin spinning={postLoading}>
      <div>
        <h1 className="page-header">Blog Post</h1>
        {postData?.length > 0
          ? postData?.map((singlePost, index) => (
              <SinglePost key={index} singlePost={singlePost} />
            ))
          : !postLoading && <h1>Post not found</h1>}
      </div>
    </Spin>
  );
}

export default memo(HomePage);
