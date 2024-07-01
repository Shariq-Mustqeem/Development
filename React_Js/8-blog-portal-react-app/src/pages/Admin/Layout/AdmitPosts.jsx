import React, { memo } from "react";
import { Button, Modal, Table, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { PostsService } from "../../../services/post.service";
import { helperService } from "../../../utils/helper";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { AUTHENTICATED_ROUTES } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;

function AdmitPosts() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const {
    data,
    isLoading: admitPostLoader,
    isFetching,
    refetch: reloadPosts,
  } = useQuery("adminPost", PostsService.getPost);

  const { mutate: deleteRequest, isLoading: postDeleteLoader } = useMutation(
    "deletePosts",
    PostsService.deletePostById
  );

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "name",
    },
    {
      title: " Author",
      dataIndex: "post_author",
      key: "name",
    },
    {
      title: " Content",
      dataIndex: "post_content",
      key: "name",
    },
    {
      title: " Date",
      // dataIndex: "post_date",
      key: "name",
      render: (row) => helperService.convertDateFormate(row?.post_date),
    },
    {
      title: " Title",
      dataIndex: "post_title",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "post_status",
      key: "name",
    },
    {
      title: " Tags",
      dataIndex: "post_tags",
      key: "name",
    },
    {
      title: "Edit",
      key: "edit",
      render: () => {
        return <Button className="btn btn-primary">Edit</Button>;
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (row) => {
        return (
          <Button
            className="btn btn-danger"
            onClick={() => deletePostRequest(row)}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  // console.log(data?.data?.results, "data?.data?.results");

  const deletePostRequest = (row) => {
    const postId = row?.id;
    confirm({
      title: "do you want to delete this post",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteRequest(postId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "post is deleted  Successfully!",
            });
            reloadPosts();
          },
        });
      },
    });
  };
  return (
    <>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: 30 }}>Admit Post</h1>
        <Button
          type="primary"
          onClick={() => navigate(AUTHENTICATED_ROUTES.ADD_POSTS)}
        >
          Add Post
        </Button>
      </div>
      <div>
        <Table
          dataSource={data?.data?.results}
          columns={columns}
          loading={admitPostLoader || isFetching || postDeleteLoader}
        />
      </div>
    </>
  );
}

export default memo(AdmitPosts);
