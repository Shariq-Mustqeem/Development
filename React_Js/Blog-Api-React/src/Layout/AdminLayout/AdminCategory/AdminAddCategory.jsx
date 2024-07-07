/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import { Form, message } from "antd";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import { useNavigate, useParams } from "react-router-dom";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useMutation, useQuery } from "react-query";
import { CategoryService } from "../../../Services/categories.service";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants";

function AdminAddCategory() {
  const { catId } = useParams();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const { data: editCategoryRequest, isLoading: editLoader } = useQuery(
    ["EditData", catId],
    () => CategoryService.getCategoryById(catId),
    {
      enabled: Boolean(catId),
    }
  );
  const { mutateAsync: updateCategoryRequest, isLoading: updateLoader } =
    useMutation(["updateCategory", catId], (payload) =>
      CategoryService.updateCategory(catId, payload)
    );

  useEffect(() => {
    if (editCategoryRequest?.data?.results) {
      form.setFieldsValue({
        cat_title: editCategoryRequest?.data?.results?.cat_title,
      });
    }
  }, [editCategoryRequest?.data?.results]);

  const { mutateAsync: addCategoryRequest, isLoading: categoryAddLoader } =
    useMutation("addCategory", CategoryService.addCategory);

  const onFinish = (values) => {
    if (catId) {
      updateCategoryRequest(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Category is edit  Successfully!",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTES.CATEGORIES);
          }, [1000]);
        },
      });
    } else {
      addCategoryRequest(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Category is add  Successfully!",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTES.CATEGORIES);
          }, [1000]);
        },
      });
    }
  };
  return (
    <div>
      {contextHolder}
      <CustomHeading>{catId ? "Edit" : "Add"} Category</CustomHeading>
      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="cat_title"
          rules={[
            {
              required: true,
              message: "Please input your category title!",
            },
          ]}
        >
          <CustomInput placeholder={catId ? "Edit Category" : "Add Category"} />
        </Form.Item>
        <CustomButton loading={categoryAddLoader || editLoader || updateLoader}>
          {catId ? "Update" : "Create"} Category
        </CustomButton>
      </Form>
    </div>
  );
}

export default memo(AdminAddCategory);
