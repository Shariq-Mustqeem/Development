import React, { memo } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { useMutation } from "react-query";
import { UserService } from "../../services/user.service";

function Register() {
  const { Title } = Typography;
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const { mutateAsync: registerRequest, isLoading: registerLoader } =
    useMutation("register", (payload) => UserService.register(payload));

  const onFinish = (values) => {
    registerRequest(values, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "User is registered Successfully!",
        });
        form.resetFields();
      },
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Title level={2}>Register</Title>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your user name!",
            },
          ]}
        >
          <Input placeholder="User Name" />
        </Form.Item>

        <Form.Item
          name="user_firstname"
          rules={[
            {
              required: true,
              message: "Please input your user first name!",
            },
          ]}
        >
          <Input placeholder="User First Name" />
        </Form.Item>

        <Form.Item
          name="user_lastname"
          rules={[
            {
              required: true,
              message: "Please input your user last name!",
            },
          ]}
        >
          <Input placeholder="User LastName" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="c_password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ marginRight: "1rem" }}
            type="primary"
            htmlType="submit"
            loading={registerLoader}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default memo(Register);
