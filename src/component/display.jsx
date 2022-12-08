import { useEffect, useState } from "react";
import axios from "axios";

export const Display = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <table style={{ border: "1px solid black" }}>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>City</th>
        <th>Street</th>
        <th>Suite</th>
      </tr>
      {data.map((el) => (
        <tr>
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.address.city}</td>
          <td>{el.address.street}</td>
          <td>{el.address.suite}</td>
        </tr>
      ))}
    </table>
  );
};
