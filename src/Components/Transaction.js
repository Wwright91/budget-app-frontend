import { Link } from "react-router-dom";

function Entry({ entry, index }) {
  return (
    <tr>
      <td>{entry.date}</td>
      <td>
        <span>{entry.category}</span>
      </td>
      <td>
        <Link to={`/entries/${index}`}>
          <h1>{`${entry.name}`}</h1>
        </Link>
      </td>
      <td>
        <Link to={`/entries/${index}/edit`}>✏️</Link>
      </td>
      <td>
        <Link to={`/entries/${index}/delete`}>🚮</Link>
      </td>
    </tr>
  );
}

export default Entry;
