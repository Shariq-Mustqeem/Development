/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, Col, Row, Table, notification } from "antd";
import { apiBaseUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

function Posts() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const {
    data: posts,
    isLoading: postsLoader,
    refetch: getPostApiRequest,
  } = useQuery("posts", () =>
    fetch(`${apiBaseUrl}/posts`).then((res) => res.json())
  );

  const { mutateAsync: deletePostReuest, isLoading: deletePostLoader } =
    useMutation("deletePost", (id) =>
      fetch(`${apiBaseUrl}/posts/${id}`, {
        method: "DELETE",
      }).then((res) => res.json())
    );

  const deleteBtnHandler = (id) => {
    if (window.confirm("Are You Sure")) {
      deletePostReuest(id, {
        onSuccess: () => {
          api.open({
            message: "Successfully",
            description: "Post is Deleted Successfully!",
            duration: 0,
          });
          getPostApiRequest();
        },
      });
    }
  };

  const columns = [
    {
      title: "Post Id",
      dataIndex: "id",
    },
    {
      title: "Post Title",
      dataIndex: "post_title",
    },
    {
      title: "Post Date",
      dataIndex: "post_date",
    },
    {
      title: "Post Image",
      render: (single) => {
        if (!single?.image) {
          return <p> Not Found</p>;
        }
        return <img src={single?.image} width="100" />;
      },
    },
    {
      title: "Post Status",
      dataIndex: "post_status",
    },
    {
      title: "Edit ",
      render: (singlePost) => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => {
                navigate(`/edit-post/${singlePost?.id}`);
              }}
            >
              Edit
            </Button>
          </>
        );
      },
    },
    {
      title: "Delete ",
      render: (singlePost) => {
        return (
          <>
            <Button danger onClick={() => deleteBtnHandler(singlePost?.id)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="container">
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          {contextHolder}
          <h1>Posts</h1>
        </Col>
        <Col>
          <Button
            secondary
            onClick={() => {
              navigate("/post/create-post");
            }}
          >
            Create Post
          </Button>
        </Col>
      </Row>

      <Table
        dataSource={posts?.results}
        columns={columns}
        pagination={false}
        loading={postsLoader || deletePostLoader}
      />
    </div>
  );
}

export default Posts;
