/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useMemo } from "react";
import { DatePicker, Form, Input, Select, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useMutation, useQuery } from "react-query";
import { PostService } from "../../../Services/post.service";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomHeading from "../../../Components/CustomHeading/CustomHeading";
import moment from "moment";

function AdmitAddPosts() {
  const { postId } = useParams();
  console.log(postId, "postId");
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const {
    data: getDataPost,
    isLoading: dataPostLoader,
    isFetching,
  } = useQuery("AdminPosts", PostService.getPost);

  const { data: editPostRequest, isLoading: editLoader } = useQuery(
    ["EditData", postId],
    () => PostService.getPostById(postId),
    {
      enabled: Boolean(postId),
    }
  );

  const { mutateAsync: updatePostRequest, isLoading: updateLoader } =
    useMutation(["Update", postId], (payload) =>
      PostService.updatePost(postId, payload)
    );

  const editPostFeildsValue = editPostRequest?.data?.results;

  useEffect(() => {
    if (editPostFeildsValue) {
      form.setFieldsValue({
        post_title: editPostFeildsValue?.post_title,
        post_author: editPostFeildsValue?.post_author,
        post_date: editPostFeildsValue?.post_date
          ? moment(editPostFeildsValue?.post_date)
          : null,
        post_content: editPostFeildsValue?.post_content,
        post_status: editPostFeildsValue?.post_status,
        post_category_id: editPostFeildsValue?.post_category_id,
        post_tags: editPostFeildsValue?.post_tags,
      });
    }
  }, [editPostFeildsValue]);

  const getDataPostRequest = useMemo(
    () => getDataPost?.data?.results,
    [getDataPost]
  );

  const { mutateAsync: addPostRequest } = useMutation(
    "addPost",
    PostService.addPost
  );

  const onFinish = (values) => {
    if (postId) {
      updatePostRequest(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Post is updated Successfully!",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTES.POSTS);
          }, [1000]);
        },
      });
    } else {
      addPostRequest(values, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "Post is add  Successfully!",
          });
          form.resetFields();
          setTimeout(() => {
            navigate(AUTHENTICATED_ROUTES.POSTS);
          }, [1000]);
        },
      });
    }
  };
  return (
    <>
      {contextHolder}
      <CustomHeading>{postId ? "Edit" : "Add"} Posts</CustomHeading>
      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="post_title"
          rules={[
            {
              required: true,
              message: "Please input your Post title!",
            },
          ]}
        >
          <CustomInput placeholder="Post Title" />
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
          <CustomInput placeholder="Post Author" />
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
            {getDataPostRequest?.length > 0 &&
              getDataPostRequest?.map((singlePostData) => (
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
          <CustomButton
            loading={dataPostLoader || isFetching || editLoader || updateLoader}
            type="primary"
            htmlType="submit"
          >
            {postId ? "Update" : "Create"} Posts
          </CustomButton>
        </Form.Item>
      </Form>
    </>
  );
}

export default memo(AdmitAddPosts);
