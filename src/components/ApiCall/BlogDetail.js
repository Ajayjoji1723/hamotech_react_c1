import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const [blog, setBlog] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const apiRes = await axios.get(`https://apis.ccbp.in/blogs/${id}`);
      const data = apiRes.data;
      if (data) {
        setBlog(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container pt-5 mt-5">
      <h1>{blog.title}</h1>
      <div>
        <p>{blog.author}</p>
        <img src={blog.avatar_url} alt="text" className="w-25" />
      </div>
      <img src={blog.image_url} className="w-75" />
      <p>{blog.content}</p>
    </div>
  );
}
