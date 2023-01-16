import { Link } from "react-router-dom";

export default function FourOFour() {
  return (
    <div>
      <h1 className="text-center">
        Sorry, the page were you were looking for was not found.
      </h1>
      <h3 className="text-center">
        Return<Link to={"/"}> Home</Link>
      </h3>
      <img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" alt="404"/>
    </div>
  );
}
