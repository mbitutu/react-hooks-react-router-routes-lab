import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((e) => {
          return (
            <div key={e.name}>
              <h2>Name: {e.name}</h2>
              <p>Movies</p>
              {e.movies.map((mov) => {
                return (
                  <li key={mov}>{mov}</li>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Actors;
