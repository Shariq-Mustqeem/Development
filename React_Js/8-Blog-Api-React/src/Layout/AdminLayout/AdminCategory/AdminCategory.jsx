import { Button, Modal, Table, message } from "antd";
import React, { memo } from "react";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import { useMutation, useQuery } from "react-query";
import { CategoryService } from "../../../Services/categories.service";
import { helperService } from "../../../utils/helper";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants";

const { confirm } = Modal;

function AdminCategory() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isFetching,
    refetch: reloadCategory,
  } = useQuery("AdminCategories", CategoryService.getCategory);

  const { mutateAsync: deleteCategroyRequest, isLoading: deleteLoader } =
    useMutation("deleteRequest", CategoryService.deleteCategoryById);
  const deleteCategory = (row) => {
    const catId = row.cat_id;
    confirm({
      title: "do you want to delete this category",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteCategroyRequest(catId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Category is deleted  Successfully!",
            });
            reloadCategory();
          },
        });
      },
    });
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "cat_id",
      key: "cat_id",
    },
    {
      title: "title",
      dataIndex: "cat_title",
      key: "cat_title",
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
                  AUTHENTICATED_ROUTES.EDIT_CATEGORY.replace(
                    ":catId",
                    row?.cat_id
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
              onClick={() => deleteCategory(row)}
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
        <CustomHeading>Categories</CustomHeading>
        <CustomButton
          onClick={() => navigate(AUTHENTICATED_ROUTES.ADD_CATEGORY)}
        >
          Add Category
        </CustomButton>
      </div>
      <Table
        dataSource={data?.data?.results}
        columns={columns}
        loading={isLoading || isFetching || deleteLoader}
      />
    </div>
  );
}

export default memo(AdminCategory);
