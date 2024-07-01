import React, { memo } from "react";
import { Button, Form, Input, message } from "antd";
import { useMutation } from "react-query";
import { CategoryService } from "../../../services/categories.service";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constant";

function AdmitAddCategory() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: addCategoryRequest, isLoading: addCategoryLoader } =
    useMutation("addCategroy", CategoryService.addCategory);

  const onFinish = (values) => {
    addCategoryRequest(values, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Categroy Add Successfully!",
        });
        form.resetFields();
        setTimeout(() => {
          navigate(AUTHENTICATED_ROUTES.CATEGORIES);
        }, [2000]);
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <h3>Add Category</h3>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          name="cat_title"
          rules={[
            {
              required: true,
              message: "Please input your Category title!",
            },
          ]}
        >
          <Input placeholder="Category Title" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={addCategoryLoader}>
            Add Category
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default memo(AdmitAddCategory);
