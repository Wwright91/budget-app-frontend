import Transaction from "./Transaction";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/entries`)
      .then((response) => {
        setEntries(response.data);
        // console.log(response.data);
      })
      .catch((e) => console.error("catch", e));
  }, []);
  return (
    <div className="Entries">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>From</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => {
              return <Transaction key={index} entry={entry} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Entries;
