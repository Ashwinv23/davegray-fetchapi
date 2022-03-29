import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [isFetchErr, setIsFetchErr] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchData = async (resource) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/" + resource
      );
      if (!response.ok)
        throw Error(`Fetching ${resource.toUpperCase()} Failed! :(`);
      const result = await response.json();
      if (resource === "comments") {
        setComments(result);
        setPosts(null);
        setUsers(null);
        setIsFetchErr(null);
      } else if (resource === "posts") {
        setPosts(result);
        setUsers(null);
        setComments(null);
        setIsFetchErr(null);
      } else if (resource === "users") {
        setUsers(result);
        setPosts(null);
        setComments(null);
        setIsFetchErr(null);
      }
    } catch (err) {
      setIsFetchErr(err.message);
    }
  };

  return (
    <div className="App">
      <Header fetchData={fetchData} />
      {isFetchErr && <h3 className="fetchErr">Error: {isFetchErr}</h3>}
      {!isFetchErr && (
        <Content users={users} posts={posts} comments={comments} />
      )}
    </div>
  );
}

export default App;
