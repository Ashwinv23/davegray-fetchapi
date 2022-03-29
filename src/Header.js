import React from "react";

const Header = ({
  fetchData,
  colorUsers,
  bgColorUsers,
  colorPosts,
  bgColorPosts,
  colorComments,
  bgColorComments,
}) => {
  return (
    <header className="header">
      <button
        onClick={() => fetchData("users")}
        style={{ backgroundColor: bgColorUsers, color: colorUsers }}
      >
        Users
      </button>
      <button
        onClick={() => fetchData("posts")}
        style={{ backgroundColor: bgColorPosts, color: colorPosts }}
      >
        Posts
      </button>
      <button
        onClick={() => fetchData("comments")}
        style={{ backgroundColor: bgColorComments, color: colorComments }}
      >
        Comments
      </button>
    </header>
  );
};

export default Header;
