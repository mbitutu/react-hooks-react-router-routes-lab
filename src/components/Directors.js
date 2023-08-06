import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directors.map((e) => {
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

export default Directors;
