import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout() {
  return (
    <div>
      <h1>heading 1</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
}

export default CustomLayout;
