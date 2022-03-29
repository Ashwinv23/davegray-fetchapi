import React from "react";

const Header = ({ fetchData }) => {
  return (
    <header className="header">
      <button onClick={() => fetchData("users")}>Users</button>
      <button onClick={() => fetchData("posts")}>Posts</button>
      <button onClick={() => fetchData("comments")}>Comments</button>
    </header>
  );
};

export default Header;
