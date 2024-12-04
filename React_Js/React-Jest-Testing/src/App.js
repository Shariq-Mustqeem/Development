import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const results = await response.json();
    setData(results);
    console.log(results);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter name"
        name="username"
        id="name"
        className="userClass"
      />
      <ul>
        {data?.map((single) => (
          <li key={single.id}>{single.name}</li>
        ))}
      </ul>
      <p>Hi My Name Is Shariq</p>

      <img
        title="Ai Image"
        src="https://imgs.search.brave.com/GVcDP9cX1YLhjAXS0-gIVZzpPpmCYLlsOHfwIOt7VfU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
        alt=""
      />
    </div>
  );
}

export default App;
