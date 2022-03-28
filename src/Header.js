import React from "react";

const Header = ({ fetchUsers }) => {
  return (
    <header className="header">
      <button onClick={fetchUsers}>Users</button>
      <button>Posts</button>
      <button>Comments</button>
    </header>
  );
};

export default Header;
