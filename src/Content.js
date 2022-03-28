import React from "react";

const Content = ({ resp }) => {
  return (
    <main className="main">
      <ul>
        {resp.map((item, i) => (
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
