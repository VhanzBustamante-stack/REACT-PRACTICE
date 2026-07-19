import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
