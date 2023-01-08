import Transaction from "./Transaction";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

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
  }, [entries]);

  const sortByDate = () => {
    setEntries([
      ...entries
        .map((e) => e)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    ]);
  };

  return (
    <div>
      <label> Search</label>
      <input />
      <br />
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th onClick={sortByDate}>Date</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return <Transaction key={index} entry={entry} index={index} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Entries;
