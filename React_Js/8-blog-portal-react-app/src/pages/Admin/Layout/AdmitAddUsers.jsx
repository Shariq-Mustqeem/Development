import React, { memo } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constant";
import { UserService } from "../../../services/user.service";
import { useMutation } from "react-query";

function AdmitAddUsers() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: addUsersRequest, isLoading: addUsersLoader } =
    useMutation("addUsers", UserService.addUsers);
  const onFinish = (values) => {
    console.log("values:", values);
    addUsersRequest(values, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Users Add Successfully!",
        });
        form.resetFields();
        setTimeout(() => {
          navigate(AUTHENTICATED_ROUTES.USERS);
        }, [2000]);
      },
    });
  };

  return (
    <>
      {contextHolder}
      <h3>Add Users</h3>
      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={addUsersLoader}>
          Add Users
        </Button>
      </Form>
    </>
  );
}

export default memo(AdmitAddUsers);
