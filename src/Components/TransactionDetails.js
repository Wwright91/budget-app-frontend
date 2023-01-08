import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [entry, setEntry] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/entries/${index}`)
      .then((response) => {
        //   console.log(response.data)
        setEntry(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/entries/${index}`)
      .then(() => {
        navigate(`/entries`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="card">
      <div className="card-header bg-info mb-3">
        <h4>{entry.name}</h4>
      </div>

      <div className="card-body text-center">
        <h5>
          Date:{" "}
          {new Date(entry.date).toDateString().split(" ").splice(1).join(" ")}
        </h5>

        <p> Amount: $ {Number(entry.amount).toLocaleString()}</p>
        <p>From: {entry.from}</p>
        <p>Category: {entry.category}</p>
        <div className="d-flex">
          <div>
            {" "}
            <Link to={`/entries`}>
              <button className="btn btn-dark">Back</button>
            </Link>
          </div>
          <div>
            {" "}
            <Link to={`/entries/${index}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div>
            {" "}
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
