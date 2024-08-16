import { useEffect, useState } from "react";
import { userAll } from "../../services/userAPI";

export function Movie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await userAll();
      setData(response);
    }
    fetchData();
  }, [data]);

  console.log(data);
  return (
    <>
      <div><h1>Hello</h1></div>
    </>
  );
}
