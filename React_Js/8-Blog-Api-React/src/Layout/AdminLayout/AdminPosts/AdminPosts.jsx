import { Button, Modal, Table, message } from "antd";
import React, { memo } from "react";
import { useMutation, useQuery } from "react-query";
import { PostService } from "../../../Services/post.service";
import { helperService } from "../../../utils/helper";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;

function AdminPosts() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isFetching,
    refetch: PostsReload,
  } = useQuery("AdminPosts", PostService.getPost);

  const { mutateAsync: deletePostsRequest, isLoading: deleteLoader } =
    useMutation("deleteRequest", PostService.deletePostById);

  const deletePosts = (row) => {
    const catId = row.id;
    confirm({
      title: "do you want to delete this Posts",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deletePostsRequest(catId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Posts is deleted  Successfully!",
            });
            PostsReload();
          },
        });
      },
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "post_title",
      key: "post_title",
    },
    {
      title: "Author",
      dataIndex: "post_author",
      key: "post_author",
    },
    {
      title: "Content",
      dataIndex: "post_content",
      key: "post_content",
    },
    {
      title: "Status",
      dataIndex: "post_status",
      key: "post_status",
    },
    {
      title: "Tag",
      dataIndex: "post_tags",
      key: "post_tags",
    },

    {
      title: "Date",
      key: "date",
      render: (row) => {
        return helperService.convertDateFormate(row.post_date);
      },
    },
    {
      title: "Edit",
      key: "edit",
      render: (row) => {
        return (
          <div>
            <CustomButton
              // type="primary"
              onClick={() =>
                navigate(
                  AUTHENTICATED_ROUTES.EDIT_POSTS.replace(":postId", row?.id)
                )
              }
            >
              Edit
            </CustomButton>
          </div>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (row) => {
        return (
          <div>
            <Button
              type="primary"
              className="deleteBtn"
              onClick={() => deletePosts(row)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <CustomHeading>Posts</CustomHeading>
        <CustomButton onClick={() => navigate(AUTHENTICATED_ROUTES.ADD_POSTS)}>
          Add Posts
        </CustomButton>
      </div>
      <Table
        dataSource={data?.data?.results}
        columns={columns}
        loading={isLoading || isFetching || deleteLoader}
      />
      ;
    </div>
  );
}

export default memo(AdminPosts);
