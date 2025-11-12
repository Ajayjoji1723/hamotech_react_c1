import React from "react";

export default function ProjectItem(props) {
  const { projectDetails } = props;
  const { projectId, category, imageURL, title, description } = projectDetails;
  return (
    <li className="project_item_li card m-2">
      <img src={imageURL} alt="title" className="w-100" />
      <div className="p-2">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}
