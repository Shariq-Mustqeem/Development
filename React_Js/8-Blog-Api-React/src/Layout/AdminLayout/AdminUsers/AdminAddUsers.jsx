/* eslint-disable react-hooks/exhaustive-deps */
import { Form, message } from "antd";
import React, { memo, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { UserService } from "../../../Services/user.service";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomInputPassword from "../../../Components/CustomInputPassword/CustomInputPassword";
import CustomButton from "../../../Components/CustomButton/CustomButton";

function AdminAddUser() {
  const { userId } = useParams();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const { mutateAsync: registeRequest, isLoading: registeRequestLoader } =
    useMutation("register", (data) => UserService.register(data));

  const { data: editUserRequest, isLoading: editLoader } = useQuery(
    ["EditData", userId],
    () => UserService.getUserById(userId),
    {
      enabled: Boolean(userId),
    }
  );

  const editUserFeildsValue = editUserRequest?.data?.results;

  useEffect(() => {
    if (editUserFeildsValue) {
      form.setFieldsValue({
        email: editUserFeildsValue?.email,
        username: editUserFeildsValue?.username,
        user_firstname: editUserFeildsValue?.user_firstname,
        user_lastname: editUserFeildsValue?.user_lastname,
        password: editUserFeildsValue?.password,
        c_password: editUserFeildsValue?.c_password,
      });
    }
  }, [editUserFeildsValue]);

  const { mutateAsync: updateUser, isLoading: updateUserLoader } = useMutation(
    ["updateUser", userId],
    (payload) => UserService.updateUser(userId, payload)
  );

  const onFinish = (values) => {
    if (userId) {
      updateUser(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "User is edit in Successfully!",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTES.USERS);
          }, [1000]);
        },
      });
    } else {
      registeRequest(values, {
        onSuccess: (data) => {
          console.log(data, "data");
          messageApi.open({
            type: "success",
            content: "User is add in Successfully!",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTES.USERS);
          }, [1000]);
        },
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <CustomHeading style={{ margin: "30px 0px" }}>
        {userId ? "Edit" : "Add"} User
      </CustomHeading>
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

        {/* {!userId && ( */}
        <>
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
        </>
        {/* )} */}

        <CustomButton
          loading={registeRequestLoader || editLoader || updateUserLoader}
          htmlType="submit"
        >
          {userId ? "Update" : "Create"} User
        </CustomButton>
      </Form>
    </div>
  );
}

export default memo(AdminAddUser);
