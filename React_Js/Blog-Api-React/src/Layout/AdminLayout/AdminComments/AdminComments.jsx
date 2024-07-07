import { Button, Modal, Table, Tag, message } from "antd";
import React, { memo } from "react";
import { useMutation, useQuery } from "react-query";
import { CommentService } from "../../../Services/comment.service";
import { helperService } from "../../../utils/helper";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function AdminComments() {
  const [messageApi, contextHolder] = message.useMessage();

  const {
    data,
    isLoading,
    isFetching,
    refetch: commentReload,
  } = useQuery("AdminComments", CommentService.getComment);

  const { mutateAsync: deleteCommentsRequest, isLoading: deleteLoader } =
    useMutation("deleteRequest", CommentService.deleteCommentById);

  const { mutateAsync: approveCommentsRequest, isLoading: approveLoader } =
    useMutation("approveRequest", CommentService.approveCommentById);

  const { mutateAsync: unapproveCommentsRequest, isLoading: unapproveLoader } =
    useMutation("unapproveRequest", CommentService.unapproveCommentById);

  const approveUnapproveHandler = (commentStatus, row) => {
    const commentId = row.comment_id;
    if (commentStatus === "approved") {
      unapproveCommentsRequest(commentId, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Comment unapproved successfully!",
          });
          commentReload();
        },
      });
    } else {
      approveCommentsRequest(commentId, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Comment approved successfully!",
          });
          commentReload();
        },
      });
    }
  };

  const deleteComments = (row) => {
    const commentId = row.comment_id;
    confirm({
      title: "Do you want to delete this comment?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteCommentsRequest(commentId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Comment deleted successfully!",
            });
            commentReload();
          },
        });
      },
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "comment_id",
      key: "comment_id",
    },
    {
      title: "User Name",
      dataIndex: ["user", "username"],
      key: "username",
    },
    {
      title: "Post Name",
      dataIndex: ["post", "post_title"],
      key: "post_title",
    },
    {
      title: "Content",
      dataIndex: "comment_content",
      key: "comment_content",
    },
    {
      title: "Action",
      dataIndex: "comment_status",
      key: "comment_status",
      render: (commentStatus, row) => {
        const color = commentStatus === "approved" ? "rgb(50 169 7)" : "#f50";
        const text = commentStatus === "approved" ? "Approved" : "Unapproved";
        return (
          <Tag
            onClick={() => approveUnapproveHandler(commentStatus, row)}
            className="approve"
            color={color}
          >
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Created At",
      key: "created_at",
      render: (row) => {
        return helperService.convertDateFormate(row.created_at);
      },
    },
    {
      title: "Updated At",
      key: "updated_at",
      render: (row) => {
        return helperService.convertDateFormate(row.updated_at);
      },
    },
    {
      title: "Action",
      key: "action",
      render: (row) => (
        <Button type="primary" danger onClick={() => deleteComments(row)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      {contextHolder}
      <CustomHeading>Comments</CustomHeading>
      <Table
        dataSource={data?.data?.results}
        columns={columns}
        loading={
          isLoading ||
          isFetching ||
          deleteLoader ||
          approveLoader ||
          unapproveLoader
        }
      />
    </div>
  );
}

export default memo(AdminComments);
