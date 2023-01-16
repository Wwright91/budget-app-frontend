import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import ConfirmDelete from "./DeleteConfirmation";
import { useState } from "react";

// const API = process.env.REACT_APP_API_URL;

function Entry({ entry, index }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  // const handleDelete = () => {
  //   axios
  //     .delete(`${API}/entries/${index}`)
  //     .then(() => {
  //       navigate(`/entries`);
  //     })
  //     .catch((e) => console.error(e));
  // };

  return (
    <>
      <tr>
        <td>{new Date(entry.date).toLocaleDateString()}</td>
        <td style={{ color: entry.amount < 0 ? "red" : "white" }}>
          $ {Number(entry.amount).toLocaleString()}
        </td>
        <td id="entry-name">
          <Link to={`/entries/${index}`}>
            <h3 className="text-info">{`${entry.name}`}</h3>
          </Link>
        </td>
        <td className="p-3">
        <Link to={`/entries/${index}/edit`}>
            <button className="btn btn-warning">Edit</button>
          </Link>
        </td>
        <td className="p-3">
          <ConfirmDelete
            index={index}
            navigate={navigate}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </td>
      </tr>
    </>
  );
}

export default Entry;
