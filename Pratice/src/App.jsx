import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = function () {
    axios
      .get("https://backend-basics-rz1f.onrender.com/deepInfor")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Front End</h1>
      <p>{data.length}</p>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
