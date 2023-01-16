import Transaction from "./Transaction";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

// const API = process.env.REACT_APP_API_URL;

function Entries({entries, setEntries}) {
  const sortByDate = () => {
    setEntries([
      ...entries
        .map((e) => e)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    ]);
  };

  return (
    <div>
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
