import { useEffect, useState } from "react";

export default function Table1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://technical-task-api.icapgroupgmbh.com/api/table/")
      .then((data) => data.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  });

  return (
    <>
      <h1>Таблица</h1>
      <table>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
