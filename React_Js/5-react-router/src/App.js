import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CustomLayout from "./Components/CustomLayout/CustomLayout";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import CustomLayoutTwo from "./Components/CustomLayoutTwo";

function App() {
  const isUserLoginedIn = true;
  return (
    <div>
      <Routes>
        {isUserLoginedIn ? (
          <React.Fragment>
            <Route element={<CustomLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product />} />
            </Route>
            <Route element={<CustomLayoutTwo />}>
              <Route path="/productDetail/:id" element={<ProductDetail />} />
            </Route>
          </React.Fragment>
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
