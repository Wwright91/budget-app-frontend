import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import hero from "../../src/budget-icon.png";

export default function NavBar({ total }) {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="bg-dark nav nav-pills nav-fill d-flex">
        {" "}
        <img onClick={goHome} src={hero} alt="hero" height="100" width="200" />
        <h1 className="p-4">
          <Link to="/entries" className="all-entries text-info" id="heading">
            Budget App
          </Link>
        </h1>
        <li className="nav-item pt-4">
          <Link to="/entries/new" className="create-new">
            <Button variant="light">+</Button>
          </Link>
        </li>
        <Button
          variant={total < 0 ? "danger" : total > 1000 ? "success" : "warning"}
          style={{ cursor: "default" }} className="total"
        >
          {total < 0 ? "Debt:" : "Left:"}{" "}
          <Badge bg="dark">
            <h5>
              {total < 0.99 && total > -1
                ? total.toLocaleString() + "¢"
                : "$" + total.toLocaleString()}
            </h5>
          </Badge>
        </Button>
      </nav>
      <br />
    </>
  );
}
