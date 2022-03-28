import React from "react";

const Content = ({ users, posts, comments }) => {
  let containsData = users ? users : posts ? posts : comments;
  return (
    <main className="main">
      <ul>
        {containsData.map((item, i) => (
          <li key={i}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
