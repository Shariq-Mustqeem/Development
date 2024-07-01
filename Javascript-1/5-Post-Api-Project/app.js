const baseUrlApi = `https://jsonplaceholder.typicode.com/posts`;
const todosListing = document.querySelector("#todos-listing");
const createForm = document.querySelector("#create-post-form");
const postApiTitle = document.querySelector("#post_title");
const postApiBody = document.querySelector("#post_body");
const createFormBtn = document.querySelector("#create-post-form button");
const editPostForm = document.querySelector("#edit-post-form");
const editPostTitle = document.querySelector("#edit_post_title");
const editPostBody = document.querySelector("#edit_post_body");
const editPostId = document.querySelector("#edit_post_id");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const postApiTitleValue = postApiTitle.value;
  const postApiBodyValue = postApiBody.value;

  if (postApiTitleValue === "" || postApiBodyValue === "") {
    return alert("All fields are required");
  }
  // if (!postApiTitleValue || !postApiBodyValue) {
  //   return alert("All fields are required");
  // }
  createFormBtn.setAttribute("disabled", "disabled");

  const body = {
    title: postApiTitleValue,
    body: postApiBodyValue,
  };
  fetch(baseUrlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (data) => {
      const jsonData = await data.json();
      console.log(jsonData, "jsonData");
      postApiTitle.value = "";
      postApiBody.value = "";
      createFormBtn.removeAttribute("disabled");
      $("#create-post").modal("hide");
    })
    .catch((err) => {
      console.log(err, "err");
      return createFormBtn.removeAttribute("disabled");
    });
});
const getTodosById = (id) => {
  return fetch(`${baseUrlApi}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "data");
      return data;
    })
    .catch((err) => console.log(err, "err"));
};
const getTodos = () => {
  // Send a GET request to the API
  fetch(baseUrlApi)
    .then((response) => response.json())
    .then((data) => {
      // Initialize an empty string to store the HTML output
      let output = "";

      // Iterate over each todo item in the response data
      data?.forEach((singleData) => {
        // Generate HTML for each todo item
        output += `<tr>
          <td>${singleData.id}</td>
          <td>${singleData.userId}</td>
          <td>${singleData.title}</td>
          <td>
            <a class="btn btn-primary edit-btn" href="#edit-post" data-id="${singleData.id}">Edit</a>
          </td>
          <td>
            <a href="#" class="btn btn-danger delete-btn" data-id="${singleData.id}">Delete</a>
          </td>
        </tr>`;
      });

      // Update the todos listing in the DOM with the generated HTML
      todosListing.innerHTML = output;
    });
};

getTodos();

todosListing.addEventListener("click", async (e) => {
  const currentElement = e.target;
  if (
    currentElement.classList.contains("delete-btn") &&
    confirm("Are you sure?")
  ) {
    const postId = currentElement.getAttribute("data-id");
    fetch(`${baseUrlApi}/${postId}`, {
      method: "DELETE",
    })
      .then(async (data) => {
        const jsonData = await data.json();
        console.log(jsonData, "jsonData");
        getTodos();
      })
      .catch((err) => {
        console.error(err, "err");
      });
  }
  if (currentElement.classList.contains("edit-btn")) {
    const postId = currentElement.getAttribute("data-id");
    console.log(postId, "postId");
    $("#edit-post").modal("show");
    const data = await getTodosById(postId);
    console.log(data, "data");

    editPostTitle.value = data?.title;
    editPostBody.value = data?.body;
    editPostId.value = data?.id;
  }
});

editPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const editPostTitleValue = editPostTitle.value;
  const editPostBodyValue = editPostBody.value;
  const editPostIdValue = editPostId.value;

  if (
    editPostTitleValue === "" ||
    editPostBodyValue === "" ||
    editPostIdValue === ""
  ) {
    return alert("All fields are required");
  }

  const body = {
    title: editPostTitleValue,
    body: editPostBodyValue,
  };

  fetch(`${baseUrlApi}/${editPostIdValue}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async () => {
      $("#edit-post").modal("hide");
      await getTodos();
    })
    .catch((err) => {
      console.error(err, "err");
    });
});
