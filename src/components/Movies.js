import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((e) => {
          return (
            <div key={e.title}>
              <h2>{e.title}</h2>
              <p>Time: {e.time}</p>
              {e.genres.map((gen) => {
                return (
                  <li key={gen}>{gen}</li>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Movies;
