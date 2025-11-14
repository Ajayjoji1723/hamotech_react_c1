import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

export default function Blogs() {
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const url = "https://apis.ccbp.in/blogs";
      const apiRes = await axios.get(url);
      const data = apiRes.data;
      if (data.length > 0) {
        setBlogsList(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="pt-5 text-center">
      <div className="pt-5">
        <h6>Ajay Kumar</h6>
        <p>Software Dev</p>
      </div>
      <ul>
        {blogsList.length > 0 ? (
          blogsList.map((blog) => <BlogItem blog={blog} key={blog.id} />)
        ) : (
          <p>No data Found.</p>
        )}
      </ul>
    </div>
  );
}
