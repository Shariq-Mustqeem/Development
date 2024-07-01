/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useEffect, useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost/CreatePost";
import EditPost from "./Components/EditPost/EditPost";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
export const apiBaseUrl = `https://jsonplaceholder.typicode.com/posts`;

function App() {
  const [post, setPost] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  // const { data: post } = useQuery("postData", () =>
  //   fetch(`${apiBaseUrl}/posts`).then((res) => res.json())
  // );

  const getPost = () => {
    setLoading(true);
    fetch(apiBaseUrl)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const deletePostById = (id) => {
    setLoading(true);
    fetch(`${apiBaseUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        getPost();
        setLoading(false);
      })
      .catch(() => {
        Swal.fire("Saved!", "", "error");
      });
  };
  const deleteBtnHandler = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deletePostById(id);
        Swal.fire("Saved!", "", "success");
      }
    });
  };
  const editBtnHandler = (e, id) => {
    e.preventDefault();
    setEditPost(id);
    const $ = window.$;
    $("#edit-post").modal("show");
  };
  return (
    <>
      {loader && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      <div className="container">
        <h1>Posts</h1>
        <CreatePost getPost={getPost} />

        {/* EDIT POST POPUP  */}
        <EditPost editPost={editPost} getPost={getPost} />
        {/* EDIT POST POPUP END  */}

        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="todos-listing">
            {post?.map((singlePost) => {
              const { id, userId, title, body } = singlePost;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => editBtnHandler(e, id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      disabled={loading}
                      onClick={(e) => deleteBtnHandler(e, id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
