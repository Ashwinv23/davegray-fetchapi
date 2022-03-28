import React from "react";

const Header = ({ fetchUsers, fetchPosts, fetchComments }) => {
  return (
    <header className="header">
      <button onClick={fetchUsers}>Users</button>
      <button onClick={fetchPosts}>Posts</button>
      <button onClick={fetchComments}>Comments</button>
    </header>
  );
};

export default Header;
