import React, { useState } from "react";

const Form = () => {
  const [player, setPlayer] = useState({ playerName: "", position: "" });
  const handleChange = (event) => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(player.name);
    console.log(player.position);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="Player">Player</label>
      <input
        name="playerName"
        type="text"
        value={player.playerName}
        placeholder="name"
        onChange={(event) => handleChange(event)}
      />
      <label htmlFor="Position">Position</label>
      <input
        name="position"
        type="text"
        value={player.position}
        placeholder="Position"
        onChange={(event) => handleChange(event)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
