import React, { memo } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomInputPassword from "../../Components/CustomInputPassword/CustomInputPassword";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Form, message } from "antd";
import CustomHeading from "../../Components/CustomHeading/CustomHeading";
import { useMutation } from "react-query";
import { UserService } from "../../Services/user.service";

function Register() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync: registeRequest, isLoading: registeRequestLoader } =
    useMutation("register", (data) => UserService.register(data));

  const onFinish = (values) => {
    registeRequest(values, {
      onSuccess: (data) => {
        console.log(data, "data");
        messageApi.open({
          type: "success",
          content: "User is Registered in Successfully!",
        });
        form.resetFields();
      },
    });
  };

  return (
    <div>
      {contextHolder}
      <CustomHeading style={{ margin: "30px 0px" }}>Register</CustomHeading>
      <Form form={form} onFinish={onFinish} autoComplete="off">
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
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <CustomInput placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="user_firstname"
          rules={[
            {
              required: true,
              message: "Please input your Firstname!",
            },
          ]}
        >
          <CustomInput placeholder="Firstname" />
        </Form.Item>

        <Form.Item
          name="user_lastname"
          rules={[
            {
              required: true,
              message: "Please input your Lastname!",
            },
          ]}
        >
          <CustomInput placeholder="Lastname" />
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
          <CustomInputPassword placeholder="Password" />
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
          <CustomInputPassword placeholder="Confirm Password" />
        </Form.Item>

        <CustomButton
          loading={registeRequestLoader}
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
          login
        </CustomButton>
      </Form>
    </div>
  );
}

export default memo(Register);
