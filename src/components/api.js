import { React, useState, useEffect } from "react";
function Api() {
  const [api, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);
  return (
    <>
      <div>JSON PLACEHOLDER</div>
      <div>
        {api.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </div>
    </>
  );
}
export default Api;
