import { React, useState, useEffect } from "react";
function Api() {
  const [api, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setData(...data))
    );
    console.log("hi", api);
  }, []);
  return (
    <>
      <div>hi miraj</div>
      <div>{JSON.stringify(api)}</div>
    </>
  );
}
export default Api;
