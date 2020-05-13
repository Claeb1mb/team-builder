import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";
import PlayerForm from "./PlayerForm";

function App() {
  const [card, setCard] = useState([
    {
      id: 1,
      team: "Player Card",
      name: "name",
    },
  ]);
  return (
    <div className="App">
      <div className="App-header">
        <img
          src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/69389576_666181967225936_1849252955895627776_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=AWq87iDzwQ0AX-cjQqC&_nc_ht=scontent-iad3-1.xx&oh=9fb4536c9bbb3c6bf8ca517e5b0393de&oe=5EDC4504"
          className="App-logo"
          alt="Wolf"
        />
        <h1>Wolf Pak</h1>
        <Form />
        <PlayerForm card={card} />
      </div>
    </div>
  );
}
export default App;
