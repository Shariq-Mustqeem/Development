import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout() {
  return (
    <>
      <h1>header</h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>

      <nav>
        <ul>
          <Link to="/about">About</Link>
        </ul>
      </nav>

      <nav>
        <ul>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}

export default CustomLayout;
