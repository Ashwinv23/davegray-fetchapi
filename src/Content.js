import React from "react";

const Content = ({ users }) => {
  return (
    <main className="main">
      <ul>
        {users.map((item, i) => (
          <li key={i}>
            {console.log(item)}
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
