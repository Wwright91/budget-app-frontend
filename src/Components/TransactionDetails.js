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
          console.log(`${API}`, response.data)
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
    <article>
      <h3>
        {entry.date}
      </h3>
      <h5>
        <span>
        {entry.name}
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {entry.amount}
      </h5>
      <p>{entry.from}</p>
      <h6>{entry.category}</h6>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/entries`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/entries/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;