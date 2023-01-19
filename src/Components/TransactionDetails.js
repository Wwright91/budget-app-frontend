import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [entry, setEntry] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/entries/${index}`)
      .then((response) => {
        setEntry(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  return (
    <div className="card">
      <div className="card-header bg-info mb-3">
        <h4>{entry.name}</h4>
      </div>

      <div className="card-body text-center">
        <h5>
          Date:{" "}
          {/* {new Date(Date.UTC(entry.date)).toDateString()} */}
          {new Date(entry.date).toDateString().split(" ").slice(1, 2) +
            " " +
            new Date(entry.date).toDateString().split(" ").slice(2).join(", ")}
        </h5>

        <p> Amount: $ {Number(entry.amount).toLocaleString()}</p>
        <p>From: {entry.from}</p>
        <p>Category: {entry.category}</p>
        <div className="d-flex show-buttons">
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
            <ConfirmDelete
              index={index}
              navigate={navigate}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
