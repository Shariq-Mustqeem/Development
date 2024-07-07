import React, { memo } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomInputPassword from "../../Components/CustomInputPassword/CustomInputPassword";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Form, message } from "antd";
import CustomHeading from "../../Components/CustomHeading/CustomHeading";
import { useMutation } from "react-query";
import { UserService } from "../../Services/user.service";
import { AuthService } from "../../utils/auth.service";
import { AUTHENTICATED_ROUTES } from "../../utils/constants";

function Login() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: loginRequest, isLoading: loginRequestLoader } =
    useMutation("loginRequest", (payload) => UserService.login(payload));

  const onFinish = (values) => {
    loginRequest(values, {
      onSuccess: (data) => {
        messageApi.open({
          type: "success",
          content: "User is Login in Successfully!",
        });
        form.resetFields();

        const loginResponse = data?.data?.results;
        AuthService.saveToken(loginResponse?.token);
        AuthService.userToken(loginResponse?.username);
        setTimeout(() => {
          window.location.href = AUTHENTICATED_ROUTES.DASHBOARD;
        }, [1000]);
      },
    });
  };

  return (
    <div>
      {contextHolder}
      <CustomHeading style={{ margin: "20px 0px" }}>Login</CustomHeading>

      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input a valid email address!",
            },
          ]}
          initialValue="oscar41@example.net"
        >
          <CustomInput placeholder="john.doe@email.com" />
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
          <CustomInputPassword placeholder="Enter your password" />
        </Form.Item>
        <CustomButton
          loading={loginRequestLoader}
          htmlType="submit"
          style={{
            color: "#fff",
            backgroundColor: "#67e71c",
            border: "none",
            borderColor: "#67e71c",
            width: "100%",
            height: "45px",
          }}
        >
          Login
        </CustomButton>
      </Form>
    </div>
  );
}

export default memo(Login);
