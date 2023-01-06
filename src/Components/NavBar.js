import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <nav>
      <img
        onClick={goHome}
        src="https://www.cflowapps.com/wp-content/uploads/2020/11/budget-approval.jpg"
        alt="hero"
        height="100"
        width="200"
      />
      <h1>
        <Link to="/entries">Budget App</Link>
      </h1>
      <button>
        <Link to="/entries/new">New Transaction</Link>
      </button>
      <span>Expected Amount: </span>
    </nav>
  );
}
