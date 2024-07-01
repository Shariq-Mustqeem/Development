import { Button, DatePicker, Form, Input, Select, message } from "antd";
import React, { memo } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATED_ROUTES } from "../../../utils/constant";
import { PostsService } from "../../../services/post.service";

function AdmitAddPosts() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const {
    data: adminPostData,
    isLoading: adminPostLoader,
    isFetching,
  } = useQuery("adminPost", PostsService.getPost);

  const adminPostDataResults = adminPostData?.data.results;

  const { mutateAsync: addPostsRequest, isLoading: addPostsLoader } =
    useMutation("addPosts", PostsService.addPosts);

  const onFinish = (values) => {
    console.log("Success:", values);
    addPostsRequest(values, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "Posts Add Successfully!",
        });
        form.resetFields();
        setTimeout(() => {
          navigate(AUTHENTICATED_ROUTES.POSTS);
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
      <h3>Add Posts</h3>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          name="post_title"
          rules={[
            {
              required: true,
              message: "Please input your Post title!",
            },
          ]}
        >
          <Input placeholder="Post Title" />
        </Form.Item>

        <Form.Item
          name="post_author"
          rules={[
            {
              required: true,
              message: "Please input your Post author!",
            },
          ]}
        >
          <Input placeholder="Post Author" />
        </Form.Item>

        <Form.Item
          name="post_date"
          rules={[
            {
              required: true,
              message: "Please input your Post date!",
            },
          ]}
        >
          <DatePicker style={{ width: "100%" }} placeholder="Post Date" />
        </Form.Item>

        <Form.Item
          name="post_content"
          rules={[
            {
              required: true,
              message: "Please input your Post content!",
            },
          ]}
        >
          <Input.TextArea placeholder="Post Content" />
        </Form.Item>

        <Form.Item
          name="post_status"
          rules={[
            {
              required: true,
              message: "Please input your Post status!",
            },
          ]}
        >
          <Select placeholder="Post Status">
            <Select.Option value="draft">Draft</Select.Option>
            <Select.Option value="publish">Publish</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="post_category_id"
          rules={[
            {
              required: true,
              message: "Please input your Post Category!",
            },
          ]}
        >
          <Select placeholder="Post Category" showSearchs>
            {adminPostDataResults?.length > 0 &&
              adminPostDataResults?.map((singlePostData) => (
                <Select.Option
                  key={singlePostData?.id}
                  value={singlePostData?.id}
                >
                  {singlePostData?.post_title}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="post_tags"
          rules={[
            {
              required: true,
              message: "Please input your Post tags!",
            },
          ]}
        >
          <Input.TextArea placeholder="Post Tags" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={adminPostLoader || addPostsLoader || isFetching}
          >
            Add Posts
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default memo(AdmitAddPosts);
