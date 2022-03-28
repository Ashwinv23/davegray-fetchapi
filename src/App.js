import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const [isFetchErr, setIsFetchErr] = useState(null);
  const [resp, setResp] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/user");
      if (!response.ok) throw Error("Fetch failed. Please check.");
      const result = await response.json();
      setResp(result);
      setIsFetchErr(null);
    } catch (err) {
      setIsFetchErr(err.message);
    }
  };

  return (
    <div className="App">
      <Header fetchUsers={fetchUsers} />
      {isFetchErr && <h3 className="fetchErr">Error: {isFetchErr}</h3>}
      {!isFetchErr && <Content resp={resp} />}
    </div>
  );
}

export default App;
