import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-flex fixed-top w-100 header_container">
      <div className="d-flex justify-content-between align-items-center">
        <h6>Logo</h6>
        <div>
          <Link to="/blogs" className="m-2">
            Home
          </Link>
          <Link to="/About" className="m-2">
            About
          </Link>
          <Link to="/contact" className="m-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
