import React, { memo } from "react";
import { Button, Modal, Table, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { CategoryService } from "../../../services/categories.service";
import { helperService } from "../../../utils/helper";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constant";

const { confirm } = Modal;

function AdmitCategories() {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const {
    data,
    isLoading: admitCategoriesLoader,
    isFetching,
    refetch: reloadCategory,
  } = useQuery("adminCategories", CategoryService.getCategory);

  const { mutate: deleteRequest, isLoading: categoryDeleteLoader } =
    useMutation("deleteCategory", CategoryService.deleteCategoryById);

  const columns = [
    {
      title: "Id",
      dataIndex: "cat_id",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "cat_title",
      key: "name",
    },
    {
      title: "Creat At",

      key: "name",
      render: (row) => helperService.convertDateFormate(row?.created_at),
    },
    {
      title: "Updated At",
      key: "name",
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
          <Button
            type="btn btn-danger"
            onClick={() => deleteRequestCategory(row)}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  const deleteRequestCategory = (row) => {
    const catId = row?.cat_id;
    confirm({
      title: "do you want to delete this category",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        deleteRequest(catId, {
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
  // console.log(data?.data?.results, "data?.data?.results");
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
        <h1 style={{ marginBottom: 30 }}>Admit Categories</h1>
        <Button
          type="primary"
          onClick={() => navigate(AUTHENTICATED_ROUTES.ADD_CATEGORY)}
        >
          Add Category
        </Button>
      </div>
      <div>
        <Table
          dataSource={data?.data?.results}
          columns={columns}
          loading={admitCategoriesLoader || isFetching || categoryDeleteLoader}
        />
      </div>
    </>
  );
}

export default memo(AdmitCategories);
