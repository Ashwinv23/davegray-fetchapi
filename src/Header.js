import React from "react";

const Header = ({ fetchUsers, fetchPosts }) => {
  return (
    <header className="header">
      <button onClick={fetchUsers}>Users</button>
      <button onClick={fetchPosts}>Posts</button>
      <button>Comments</button>
    </header>
  );
};

export default Header;
