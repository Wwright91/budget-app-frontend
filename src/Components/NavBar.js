import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Badge, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function NavBar() {
  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/entries`)
      .then((response) => {
        setEntries(response.data);
        // console.log(response.data);
        setTotal(
          response.data
            .map(({ amount }) => Number(amount))
            .reduce((a, b) => a + b, 0)
        );
      })
      .catch((e) => console.error("catch", e));
  }, [entries]);

  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="bg-dark nav nav-pills nav-fill d-flex">
        {" "}
        <img
          onClick={goHome}
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/cd/69/77/cd69778f-f58f-9787-8fa2-c193703a217c/AppIconPro-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
          alt="hero"
          height="100"
          width="200"
        />
        <h1 className="justify-content-center">
          <Link to="/entries" className="all-entries text-info">
            Budget App
          </Link>
        </h1>
        <li className="nav-item">
          <Link to="/entries/new" className="create-new">
            <Button variant="light">New Transaction</Button>
          </Link>
        </li>
        <Button
          variant={total < 0 ? "danger" : total > 1000 ? "success" : "warning"}
        >
          Expected Amount:{" "}
          <Badge bg="dark">
            <h5>$ {total.toLocaleString()}</h5>
          </Badge>
        </Button>
      </nav>
      <br />
    </>
  );
}
