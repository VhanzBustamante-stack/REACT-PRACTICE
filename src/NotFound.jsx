import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry</h1>
      <p>This page is not found.</p>
      <Link to="/">Back to Home page...</Link>
    </div>
  );
};

export default NotFound;
