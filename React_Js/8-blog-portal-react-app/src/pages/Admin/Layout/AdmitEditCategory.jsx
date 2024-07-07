import { Button, Form, Input } from "antd";
import React from "react";

function AdmitEditCategory() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("values:", values);
  };
  return (
    <>
      <h3>AdmitEditCategory</h3>
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

        <Button type="primary" htmlType="submit">
          Add Users
        </Button>
      </Form>
    </>
  );
}

export default AdmitEditCategory;
