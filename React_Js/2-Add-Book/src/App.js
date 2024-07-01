/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const bookFormSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !author || !isbn) {
      return alert("Please fill in all fields");
    }

    const newBookShallowCopy = {
      title,
      author,
      isbn,
    };

    if (isEdit === null) {
      setBook([...book, newBookShallowCopy]);
    } else {
      const shallowCopy = [...book];
      const findBookShallowCopy = shallowCopy[isEdit];
      findBookShallowCopy.title = title;
      findBookShallowCopy.author = author;
      findBookShallowCopy.isbn = isbn;

      setBook(shallowCopy);
    }

    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const deleteButtonHandler = (e, index) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this book?")) {
      const tempBook = [...book];
      tempBook.splice(index, 1);
      setBook(tempBook);
    }
  };

  const editButtonHandler = (e, index) => {
    setIsEdit(index);
    const findBook = book[index];
    setTitle(findBook.title);
    setAuthor(findBook.author);
    setIsbn(findBook.isbn);
  };

  return (
    <div className="container">
      <h1>Add Book</h1>
      <form id="book-form" onSubmit={bookFormSubmitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            className="u-full-width"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            id="author"
            className="u-full-width"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div>
          <label>ISBN#</label>
          <input
            type="number"
            id="isbn"
            className="u-full-width"
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
          />
        </div>
        <div>
          <input
            type="submit"
            value={isEdit === null ? "Create" : "Update"}
            className="u-full-width"
          />
        </div>
      </form>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="book-list">
          {book.map((singleBook, index) => {
            return (
              <tr key={index}>
                <td>{singleBook.title}</td>
                <td>{singleBook.author}</td>
                <td>{singleBook.isbn}</td>
                <td>
                  <button onClick={(e) => editButtonHandler(e, index)}>
                    edit
                  </button>
                </td>
                <td>
                  <a href="#" onClick={(e) => deleteButtonHandler(e, index)}>
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
