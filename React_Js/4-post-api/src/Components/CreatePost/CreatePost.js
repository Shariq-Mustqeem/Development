import React, { useState } from "react";
import { apiBaseUrl } from "../../App";
import Swal from "sweetalert2";

function CreatePost(props) {
  const { getPost } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    title,
    body,
  };
  const createPostSubmitHandler = (e) => {
    e.preventDefault();

    if (!title || !body) {
      return Swal.fire("Saved!", "", "error");
    }
    setLoading(true);

    fetch(apiBaseUrl, {
      method: "POST",
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
        $("#create-post").modal("hide");
        setLoading(false);
      })
      .catch(() => {
        Swal.fire("Saved!", "", "error");
      });
  };
  return (
    <div>
      <a className="btn btn-primary" data-toggle="modal" href="#create-post">
        Create Post
      </a>
      <div className="modal fade" id="create-post">
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
              <h4 className="modal-title">Create Post</h4>
            </div>
            <div className="modal-body">
              <form
                action=""
                method="POST"
                role="form"
                id="create-post-form"
                onSubmit={createPostSubmitHandler}
              >
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="post_title"
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
                    id="post_body"
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
    </div>
  );
}

export default CreatePost;
