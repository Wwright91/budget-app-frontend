import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [entry, setEntry] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/entries`, entry)
      .then(() => {
        navigate(`/entries`);
      })
      .catch((c) => console.error("catch", c));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={entry.date}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          required
          value={entry.name}
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          onChange={handleTextChange}
          value={entry.amount}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          value={entry.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={entry.category}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
