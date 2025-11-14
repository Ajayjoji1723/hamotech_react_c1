import React from "react";
import { Link } from "react-router-dom";

export default function BlogItem(props) {
  const { blog } = props;
  const { author, avatar_url, id, image_url, title, topic } = blog;
  return (
    <Link to={`/blog/detail/${id}`} className="blog_link">
      <li className="card m-2">
        <div className="d-flex">
          <img src={image_url} alt={title} className="w-25" />
          <div className="d-flex flex-column p-3">
            <p>{topic}</p>
            <h6>{title}</h6>
            <div className="d-flex align-items-center">
              <img src={avatar_url} alt={author} className="autor_img" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
