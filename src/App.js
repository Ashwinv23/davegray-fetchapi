import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [isFetchErr, setIsFetchErr] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (!response.ok) throw Error("Fetching Comments Failed! :(");
      const result = await response.json();
      setComments(result);
      setPosts(null);
      setUsers(null);
      setIsFetchErr(null);
    } catch (err) {
      setIsFetchErr(err.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw Error("Fetching Posts Failed! :(");
      const result = await response.json();
      setPosts(result);
      setUsers(null);
      setComments(null);
      setIsFetchErr(null);
    } catch (err) {
      setIsFetchErr(err.message);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw Error("Fetching Users Failed! :(");
      const result = await response.json();
      setUsers(result);
      setPosts(null);
      setComments(null);
      setIsFetchErr(null);
    } catch (err) {
      setIsFetchErr(err.message);
    }
  };

  return (
    <div className="App">
      <Header
        fetchUsers={fetchUsers}
        fetchPosts={fetchPosts}
        fetchComments={fetchComments}
      />
      {isFetchErr && <h3 className="fetchErr">Error: {isFetchErr}</h3>}
      {!isFetchErr && (
        <Content users={users} posts={posts} comments={comments} />
      )}
    </div>
  );
}

export default App;
