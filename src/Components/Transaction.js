import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Entry({ entry, index }) {
  let navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}/entries/${index}`)
      .then(() => {
        navigate(`/entries`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <tr>
        <td>{new Date(entry.date).toLocaleDateString()}</td>
        <td style={{ color: entry.amount < 0 ? "red" : "white" }}>
          $ {Number(entry.amount).toLocaleString()}
        </td>
        <td id="entry-name">
          <Link to={`/entries/${index}`}>
            <h1 className="text-info">{`${entry.name}`}</h1>
          </Link>
        </td>
        <td className="p-6">
          <Link to={`/entries/${index}/edit`}>📝</Link>
        </td>
        <td className="p-3">
          <button onClick={handleDelete}>🗑️</button>
        </td>
      </tr>
    </>
  );
}

export default Entry;
