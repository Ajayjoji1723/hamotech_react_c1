import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./contact.css";
import ContactItem from "./ContactItem";

const initialContactsList = [
  {
    id: uuidv4(),
    name: "Ram",
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Pavan",
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: "Nikhil",
    mobileNo: 9999955555,
    isFavorite: false,
  },
];

export default function Contacts() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactList, setContactList] = useState(initialContactsList);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const addContact = () => {
    if (name === "" || mobile === "") {
      alert("Name and mobile are required");
    } else {
      const newContact = {
        id: uuidv4(),
        name: name,
        mobileNo: mobile,
        isFavorite: false,
      };

      setContactList([...contactList, newContact]);
      setName("");
      setMobile("");
    }
  };

  const toggleIsFav = (id) => {
    setContactList((prevState) =>
      prevState.map((contact) =>
        contact.id === id
          ? { ...contact, isFavorite: !contact.isFavorite }
          : contact
      )
    );
  };

  return (
    <div className="container pt-5">
      <div className="row">
        <h4>Contact</h4>
        <div className="col-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="p-2 w-100"
            onChange={onChangeName}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Mobile No"
            value={mobile}
            className="p-2 w-100"
            onChange={onChangeMobile}
          />
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={addContact}>
            Add Contact
          </button>
        </div>
      </div>
      <table className="w-100">
        <tr>
          <th>Name</th>
          <th>Mobile</th>
        </tr>

        {contactList.map((contact) => (
          <ContactItem
            contactDetail={contact}
            key={contact.id}
            toggleIsFav={toggleIsFav}
          />
        ))}
      </table>
    </div>
  );
}
