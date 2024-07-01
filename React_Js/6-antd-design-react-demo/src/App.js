import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomLayout from "./pages/CustomLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const isUserLoginedIn = true;
  return (
    <Routes>
      {isUserLoginedIn ? (
        <Route element={<CustomLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      ) : (
        <Route path="/login" element={<Login />} />
      )}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
