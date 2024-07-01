import React, { memo } from "react";
import { Button, Modal, Table, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { CommentsService } from "../../../services/comments.service";
import { helperService } from "../../../utils/helper";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function AdminComments() {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    data,
    isLoading: admitCommentsLoader,
    isFetching,
    refetch: reloadComments,
  } = useQuery("adminComments", CommentsService.getComments);

  const { mutate: deleteRequest, isLoading: commentsDeleteLoader } =
    useMutation("deleteComments", CommentsService.deleteCommentsById);

  const columns = [
    {
      title: "Id",
      dataIndex: "comment_id",
      key: "comment_id",
    },
    {
      title: "Content",
      dataIndex: "comment_content",
      key: "comment_content",
    },
    {
      title: "Status",
      dataIndex: "comment_status",
      key: "comment_status",
    },
    {
      title: "Creat At",
      key: "created_at",
      render: (row) => helperService.convertDateFormate(row?.created_at),
    },
    {
      title: "Updated At",
      key: "updated_at",
      render: (row) => helperService.convertDateFormate(row?.updated_at),
    },
    {
      title: "Approve",
      key: "approve",
      render: () => {
        return <Button type="primary">Approve</Button>;
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (row) => {
        return (
          <Button
            type="btn btn-danger"
            onClick={() => deleteRequestComments(row)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const deleteRequestComments = (row) => {
    const commentsId = row?.comment_id;
    confirm({
      title: "do you want to delete this comments",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteRequest(commentsId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "comments is deleted  Successfully!",
            });
            reloadComments();
          },
        });
      },
    });
  };
  return (
    <div>
      {contextHolder}
      <Table
        dataSource={data?.data?.results}
        columns={columns}
        loading={admitCommentsLoader || isFetching || commentsDeleteLoader}
      />
      ;
    </div>
  );
}

export default memo(AdminComments);
