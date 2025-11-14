import React from "react";

export default function ContactItem(props) {
  const { contactDetail, toggleIsFav } = props;
  const { isFavorite, id } = contactDetail;

  const onFavIcon = () => {
    toggleIsFav(id);
  };
  const isFavImage = isFavorite
    ? "https://assets.ccbp.in/frontend/react-js/star-filled-img.png"
    : "https://assets.ccbp.in/frontend/react-js/star-outline-img.png";

  return (
    <tr>
      <td>{contactDetail.name}</td>
      <td>
        <div className="d-flex justify-content-between">
          <p>{contactDetail.mobileNo}</p>
          <button className="contact_item_btn" onClick={onFavIcon}>
            <img src={isFavImage} alt="icon" />
          </button>
        </div>
      </td>
    </tr>
  );
}
