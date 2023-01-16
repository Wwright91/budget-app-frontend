import { Link } from "react-router-dom";
// import DoughnutChart from "../Components/Doughnut";
import React from "react";

function Home() {
  return (
    <div className="Home text-center" id="homepage">
      <h3>Welcome to the Budget App!</h3>
      <h6>
        Let's take a look at your <Link to={"/entries"}>breakdown</Link>.
      </h6>
      <br />
      <div>
        {" "}
        {/* <DoughnutChart /> */}
      </div>
    </div>
  );
}

export default Home;
