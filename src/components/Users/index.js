import { useState } from "react";
import "./index.css";
import Userprofile from "../Userprofile/index";

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const Users = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(userDetailsList);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setSearchResult(
      searchResult.filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const deletUser = (unique) => {
    const filteredData = searchResult.filter(
      (user) => user.uniqueNo !== unique
    );
    setSearchResult(filteredData);
  };

  return (
    <div className="text-center pt-3">
      <input
        type="search"
        className="input"
        placeholder="search with user name..."
        value={search}
        onChange={handleSearch}
      />
      {searchResult.map((user) => (
        <Userprofile user={user} key={user.uniqueNo} deletUser={deletUser} />
      ))}
    </div>
  );
};

export default Users;
