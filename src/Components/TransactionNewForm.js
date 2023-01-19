import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Button, Form } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [entry, setEntry] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });

  // const [otherOption, setOtherOption] = useState("");

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setEntry({ ...entry, [event.target.id]: event.target.value });
  };

  // const handleOtherOption = (e) => {
  //   setOtherOption(e.target.value);
  //   if (otherOption) {
  //     setEntry({ ...entry, category: e.target.value });
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/entries`, entry)
      .then(() => {
        navigate(`/entries`);
        window.location.reload();
      })
      .catch((c) => console.error("catch", c));
  };

  const previousPage = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className="New p-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={entry.date}
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
            className="form-control"
            id="category"
            onChange={(e) =>
              setEntry({
                ...entry,
                category: e.target.options[e.target.selectedIndex].text,
              })
            }
          >
            <option value=""></option>
            <option value="paycheck">Pay Check</option>
            <option value="phonebill">Phone Bill</option>
            <option value="lightbill">Light Bill</option>
            <option value="loan">Loan</option>
            <option value="carpayment">Car Payment</option>
            <option value="insurance">Insurance</option>
            <option value="grocery">Grocery</option>
            <option value="other">Other</option>
          </select>
        </div>

        <br />
        <div className="new-buttons">
          <button
            type="button"
            className="btn  btn-outline-warning"
            onClick={previousPage}
          >
            Back
          </button>{" "}
          <br />
          <button className="btn btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TransactionNewForm;
