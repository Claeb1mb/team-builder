import React from "react";

const PlayerForm = (props) => {
  return (
    <div>
      {props.card.map((players) => (
        <div className="card" key={players.id}>
          <h2>{players.team}</h2>
          <p>{}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerForm;
