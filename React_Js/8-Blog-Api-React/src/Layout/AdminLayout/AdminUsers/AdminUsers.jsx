import React, { memo } from "react";
import { Button, Modal, Table, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { UserService } from "../../../Services/user.service";
import { helperService } from "../../../utils/helper";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants";

const { confirm } = Modal;

function AdminUsers() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isFetching,
    refetch: usersReload,
  } = useQuery("AdminUsers", UserService.getUsers);

  const { mutateAsync: deleteUsersRequest, isLoading: deleteLoader } =
    useMutation("deleteRequest", UserService.deleteUserById);

  const deleteUsers = (row) => {
    const catId = row.user_id;
    confirm({
      title: "do you want to delete this Users",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteUsersRequest(catId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Users is deleted  Successfully!",
            });
            usersReload();
          },
        });
      },
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "First Name",
      dataIndex: "user_firstname",
      key: "user_firstname",
    },
    {
      title: "Last Name",
      dataIndex: "user_lastname",
      key: "user_lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Image",
      key: "user_image",
      render: (row) => {
        if (!row?.user_image) {
          return "Image not found";
        }
        return <img src={row?.user_image} width="80" alt="userImage" />;
      },
    },
    {
      title: "Role",
      dataIndex: "user_role",
      key: "Role",
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
      title: "Edit",
      key: "edit",
      render: (row) => {
        return (
          <div>
            <CustomButton
              type="primary"
              onClick={() =>
                navigate(
                  AUTHENTICATED_ROUTES.EDIT_USERS.replace(
                    ":userId",
                    row?.user_id
                  )
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
              onClick={() => deleteUsers(row)}
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
        <CustomHeading>Users</CustomHeading>
        <CustomButton onClick={() => navigate(AUTHENTICATED_ROUTES.ADD_USERS)}>
          Add Users
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

export default memo(AdminUsers);
