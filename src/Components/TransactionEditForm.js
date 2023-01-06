import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EntryEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [entry, setEntry] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/entries/${index}`)
      .then((response) => {
        setEntry(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };

  const updateEntry = () => {
    axios
      .put(`${API}/entries/${index}`, entry)
      .then((response) => {
        setEntry(response.data);
        navigate(`/entries/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry();
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/entries/${index}`)
      .then(() => {
        navigate(`/entries`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="Edit">
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
      <Link to={`/entries/${index}`}>
        <button>Nevermind!</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EntryEditForm;
