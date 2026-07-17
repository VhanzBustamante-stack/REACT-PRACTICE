import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new blog 1", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "My new blog 2", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "My new blog 3", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // console.log("useEffect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="My blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Change Name</button>
      <p>My name is {name}</p>
    </div>
  );
};

export default Home;
