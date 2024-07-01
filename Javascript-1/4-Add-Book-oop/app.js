const addBookForm = document.querySelector("#book-form");
const appendBookList = document.querySelector("#book-list");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");

function UI() {}
UI.prototype.addBook = function (bookObject) {
  const createRow = document.createElement("tr");
  createRow.innerHTML = `<th>${bookObject.title}</th>
  <th>${bookObject.author}</th>
  <th>${bookObject.isbn}</th>
  <th><button type="button" class="btn btn-danger">x</button></th>`;

  appendBookList.append(createRow);
};

function createBookUi(title, author, isbn) {
  (this.title = title), (this.author = author), (this.isbn = isbn);
}

const bookObject = new createBookUi(title.value, author.value, isbn.value);

const ui = new UI();
ui.addBook(bookObject);

addBookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!title.value || !author.value || !isbn.value) {
    return alert("please fill the ");
  }

  const createRow = document.createElement("tr");
  createRow.innerHTML = `<th>${title.value}</th>
  <th>${author.value}</th>
  <th>${isbn.value}</th>
  <th><button type="button" class="btn btn-danger">x</button></th>`;

  appendBookList.append(createRow);

  title.value = "";
  author.value = "";
  isbn.value = "";
});

appendBookList.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (
    currentElement.className === "btn btn-danger" &&
    confirm("Are you sure")
  ) {
    currentElement.parentElement.parentElement.remove();
  }
});
