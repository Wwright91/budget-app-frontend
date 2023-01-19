import { Link, useNavigate } from "react-router-dom";
import ConfirmDelete from "./DeleteConfirmation";
import { useState } from "react";

function Entry({ entry, index }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

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
