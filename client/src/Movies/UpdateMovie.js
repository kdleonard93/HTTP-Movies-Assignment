import React, { useState } from "react";

const initialState = {
  id: null,
  title: "",
  director: "",
  metascore: null,
  stars: []
};

const UpdateMovie = () => {};

return (
  <>
    <form>
      <input
        type="text"
        name="title"
        value={movie.title}
        placeholder="Title"
      ></input>
      <input
        type="text"
        name="director"
        value={movie.director}
        placeholder="Director"
      ></input>
      <input
        type="text"
        name="stars"
        value={movie.stars}
        placeholder="Stars"
      ></input>
      <input
        type="number"
        name="metascore"
        value={movie.metascore}
        placeholder="Metascore"
      ></input>
    </form>
  </>
);

export default UpdateMovie;
