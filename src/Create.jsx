import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Author</label>
        <select
          required
          value="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
      </form>
    </div>
  );
};

export default Create;
