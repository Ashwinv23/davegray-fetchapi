import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [isFetchErr, setIsFetchErr] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [bgColorUsers, setBgColorUsers] = useState("");
  const [colorUsers, setColorUsers] = useState("");
  const [bgColorPosts, setBgColorPosts] = useState("");
  const [colorPosts, setColorPosts] = useState("");
  const [bgColorComments, setBgColorComments] = useState("");
  const [colorComments, setColorComments] = useState("");

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
        setBgColorComments("#000");
        setColorComments("#fff");
        setBgColorPosts("");
        setColorPosts("");
        setBgColorUsers("");
        setColorUsers("");
      } else if (resource === "posts") {
        setPosts(result);
        setUsers(null);
        setComments(null);
        setIsFetchErr(null);
        setBgColorPosts("#000");
        setColorPosts("#fff");
        setBgColorUsers("");
        setColorUsers("");
        setBgColorComments("");
        setColorComments("");
      } else if (resource === "users") {
        setUsers(result);
        setPosts(null);
        setComments(null);
        setIsFetchErr(null);
        setBgColorUsers("#000");
        setColorUsers("#fff");
        setBgColorComments("");
        setColorComments("");
        setBgColorPosts("");
        setColorPosts("");
      }
    } catch (err) {
      setIsFetchErr(err.message);
    }
  };

  return (
    <div className="App">
      <Header
        fetchData={fetchData}
        colorUsers={colorUsers}
        bgColorUsers={bgColorUsers}
        colorPosts={colorPosts}
        bgColorPosts={bgColorPosts}
        colorComments={colorComments}
        bgColorComments={bgColorComments}
      />
      {isFetchErr && <h3 className="fetchErr">Error: {isFetchErr}</h3>}
      {!isFetchErr && (
        <Content users={users} posts={posts} comments={comments} />
      )}
    </div>
  );
}

export default App;
