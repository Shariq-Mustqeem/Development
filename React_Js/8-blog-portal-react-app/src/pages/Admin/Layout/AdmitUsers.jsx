import React, { memo } from "react";
import { Button, Modal, Table, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { UserService } from "../../../services/user.service";
import { helperService } from "../../../utils/helper";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constant";

const { confirm } = Modal;

function AdmitUsers() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const {
    data,
    isLoading: admitUsersLoader,
    isFetching,
    refetch: reloadUsers,
  } = useQuery("adminUsers", UserService.getUsers);

  const { mutate: deleteRequest, isLoading: userDeleteLoader } = useMutation(
    "deleteUser",
    UserService.deleteUsersById
  );

  const columns = [
    {
      title: "Id",
      dataIndex: "user_id",
      key: "name",
    },
    {
      title: "First Name",
      dataIndex: "user_firstname",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "user_lastname",
      key: "name",
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
      title: "Edit",
      key: "edit",
      render: () => {
        return <Button type="primary">Edit</Button>;
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (row) => {
        return (
          <Button type="btn btn-danger" onClick={() => deleteRequestUsers(row)}>
            Delete
          </Button>
        );
      },
    },
  ];
  // console.log(data?.data?.results, "data?.data?.results");

  const deleteRequestUsers = (row) => {
    const userId = row?.user_id;
    confirm({
      title: "do you want to delete this User",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteRequest(userId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "User is deleted  Successfully!",
            });
            reloadUsers();
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
        <h1 style={{ marginBottom: 30 }}>Admit Users</h1>
        <Button
          type="primary"
          onClick={() => navigate(AUTHENTICATED_ROUTES.ADD_USERS)}
        >
          Add Users
        </Button>
      </div>
      <div>
        <Table
          dataSource={data?.data?.results}
          columns={columns}
          loading={admitUsersLoader || isFetching || userDeleteLoader}
        />
      </div>
    </>
  );
}

export default memo(AdmitUsers);
