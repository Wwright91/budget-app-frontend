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
        window.location.reload();
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEntry();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            value={entry.date}
            type="date"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="name">Item Name:</label>
          <input
            className="form-control"
            id="name"
            type="text"
            required
            value={entry.name}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            className="form-control"
            id="amount"
            type="number"
            onChange={handleTextChange}
            value={entry.amount}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            className="form-control"
            id="from"
            name="from"
            type="text"
            value={entry.from}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            className="form-control"
            onChange={(e) => setEntry({ ...entry, category: e.target.value })}
            value={entry.category}
          >
            <option value=""></option>
            <option value="Pay Check">Pay Check</option>
            <option value="Phone Bill">Phone Bill</option>
            <option value="Light Bill">Light Bill</option>
            <option value="Loan">Loan</option>
            <option value="Car Payment">Car Payment</option>
            <option value="Insurance">Insurance</option>
            <option value="Grocery">Grocery</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br />
        <div className="d-flex show-buttons">
          <button className="btn btn-success">Submit</button>
          <Link to={`/entries/${index}`}>
            <button className="btn btn-warning">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EntryEditForm;
