import React, { memo } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { useMutation } from "react-query";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../utils/auth.service";
import { AUTHENTICATED_ROUTES } from "../../utils/constant";

function Login() {
  const { Title } = Typography;
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const { mutateAsync: loginRequest, isLoading: loginLoader } = useMutation(
    "login",
    (payload) => UserService.login(payload)
  );

  const onFinish = (values) => {
    loginRequest(values, {
      onSuccess: (data) => {
        // console.log(data?.data?.results, "data");
        messageApi.open({
          type: "success",
          content: "User is logged in Successfully!",
        });
        form.resetFields();
        const apiResponse = data?.data?.results;

        AuthService.saveToken(apiResponse?.token);
        AuthService.saveUserName(apiResponse?.username);

        window.location.href = AUTHENTICATED_ROUTES.DASHBOARD;
      },
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Title level={2}>Login</Title>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
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
          initialValue="oscar41@example.net"
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
          initialValue="admin123@"
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ marginRight: "1rem" }}
            type="primary"
            htmlType="submit"
            loading={loginLoader}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default memo(Login);
