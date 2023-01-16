// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

function App() {
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
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar total={total} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entries" element={<Index entries={ entries} setEntries={setEntries} />} />
            <Route path="/entries/new" element={<New />} />
            <Route path="/entries/:index" element={<Show />} />
            <Route path="/entries/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
