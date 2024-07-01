import React, { useEffect, useState } from "react";
import { apiBaseUrl } from "../../App";
import Swal from "sweetalert2";

function EditPost(props) {
  const { getPost, editPost } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editPost) {
      getEditPostData(editPost);
    }
  }, [editPost]);

  const getEditPostData = (id) => {
    setLoading(true);
    fetch(`${apiBaseUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data?.title);
        setBody(data?.body);
        setLoading(false);
      })
      .catch(() => {
        Swal.fire("Saved!", "", "error");
      });
  };

  const editPostSubmitHander = (e) => {
    e.preventDefault();
    if (!title || !body) {
      return Swal.fire("Saved!", "", "error");
    }
    const payload = {
      title,
      body,
    };
    setLoading(true);

    fetch(`${apiBaseUrl}/${editPost}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        getPost();
        setTitle("");
        setBody("");
        const $ = window.$;
        $("#edit-post").modal("hide");
        setLoading(false);
      })
      .catch(() => {
        Swal.fire("Saved!", "", "error");
      });
  };
  return (
    <div className="modal fade" id="edit-post">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 className="modal-title">Edit Post</h4>
          </div>
          <div className="modal-body">
            <form
              action=""
              method="POST"
              role="form"
              id="edit-post-form"
              onSubmit={editPostSubmitHander}
            >
              <input type="hidden" name="post_id" id="edit_post_id" />
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit_post_title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Body</label>
                <textarea
                  name=""
                  id="edit_post_body"
                  cols="30"
                  rows="10"
                  placeholder="Body"
                  className="form-control"
                  value={body}
                  onChange={(e) => {
                    e.preventDefault();
                    setBody(e.target.value);
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
