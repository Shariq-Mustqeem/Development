/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Typography,
  notification,
} from "antd";
import { useMutation, useQuery } from "react-query";
import { apiBaseUrl } from "../../constant";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const { data: categoriesPost, isLoading: categoryPostsLoader } = useQuery(
    "categories",
    () => fetch(`${apiBaseUrl}/categories`).then((res) => res.json())
  );

  const categoriesDataId = categoriesPost?.results;

  const { data: editPostDataRequest, isLoading: editPostDataLoader } = useQuery(
    ["editPost", id],
    () => fetch(`${apiBaseUrl}/posts/${id}`).then((res) => res.json()),
    {
      enabled: Boolean(id) && Boolean(categoriesDataId),
    }
  );
  const editPostData = editPostDataRequest?.results;

  useEffect(() => {
    // console.log(editPostDataId, "editPostDataId");
    if (editPostData) {
      form.setFieldsValue({
        post_title: editPostData?.post_title,
        post_category_id: editPostData?.post_category_id,
        post_author: editPostData?.post_author,
        post_date: moment(editPostData?.post_date),
        post_content: editPostData?.post_content,
        post_status: editPostData?.post_status,
        post_tags: editPostData?.post_tags,
      });
    }
  }, [editPostData]);

  const { mutateAsync: craetePosts, isLoading: createPostLoader } = useMutation(
    "createPost",
    (paylaod) =>
      fetch(`${apiBaseUrl}/posts`, {
        method: "POST",
        body: JSON.stringify(paylaod),
        headers: {
          "Content-Type": "Application/json",
        },
      })
  );
  const onFinish = (values) => {
    const paylaod = { ...values };
    paylaod.post_date = moment(paylaod.post_date);
    craetePosts(paylaod, {
      onSuccess: () => {
        form.resetFields();
        api.open({
          message: "Successfully",
          description: "Post is Deleted Successfully!",
          duration: 0,
        });
        setTimeout(() => {
          navigate("/");
        }, [1000]);
      },
    });
    console.log(values, "values");
  };
  // const filterOption = (input, option) =>
  //   (option?.children ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="container">
      <Typography.Title>Edit Post</Typography.Title>
      {contextHolder}
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
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
          <DatePicker className="w-100" placeholder="Post Date" />
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
          <Select
            placeholder="Post Category"
            showSearch
            // filterOption={filterOption}
          >
            {categoriesDataId?.length > 0 &&
              categoriesDataId?.map((singlePostData) => (
                <Select.Option
                  key={singlePostData?.cat_id}
                  value={singlePostData?.cat_id}
                >
                  {singlePostData?.cat_title}
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
            loading={
              createPostLoader || categoryPostsLoader || editPostDataLoader
            }
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditPost;
