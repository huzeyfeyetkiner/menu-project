import "./App.css";
import menu from "./data.js";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [filtered, setFiltered] = useState("all");

  return (
    <div className="App">
      <div className="navbar">
        <h1>Our Menu</h1>
        <div className="buttons">
          <button
            onClick={() => {
              setFiltered("all");
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setFiltered("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            onClick={() => {
              setFiltered("lunch");
            }}
          >
            Lunch
          </button>
          <button
            onClick={() => {
              setFiltered("shakes");
            }}
          >
            Shakes
          </button>
        </div>
      </div>
      <List filtered={filtered} menu={menu} />
    </div>
  );
}

export default App;
