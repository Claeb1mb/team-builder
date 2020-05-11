import React, { useState } from "react";

const Form = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="Player">Player</label>
      <br></br>
      <input type="text" placeholder="Name" />
      <br></br>
      <input type="text" placeholder="Position" />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
