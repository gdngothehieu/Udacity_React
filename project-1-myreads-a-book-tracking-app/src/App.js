import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h2>My Reads - a book tracking app</h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "33%" }}>Reading</div>
        <div style={{ width: "33%" }}>Read</div>
        <div style={{ width: "33%" }}>Want</div>
      </div>
      <Link to="/searchBook">
        <button>Search Book</button>
      </Link>
    </div>
  );
};

export default App;
