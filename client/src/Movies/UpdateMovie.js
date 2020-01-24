import React, { useState } from "react";

const initialState = {
  id: null,
  title: "",
  director: "",
  metascore: null,
  stars: []
};

const UpdateMovie = props => {
  const [movie, setMovie] = useState(initialState);

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: [e.target.value]
    });
    console.log(movie);
  };

//   const handleSubmit = e => {
//     // e.preventDefault(),
//   };
// };

return (
  <>
    <form onSubmit={updateMovie}>
      <input
        type="text"
        name="title"
        value={movie.title}
        placeholder="Title"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="director"
        value={movie.director}
        placeholder="Director"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="stars"
        value={movie.stars}
        placeholder="Stars"
        onChange={handleChange}
      ></input>
      <input
        type="number"
        name="metascore"
        value={movie.metascore}
        placeholder="Metascore"
        onChange={handleChange}
      ></input>
    </form>
  </>
);

export default UpdateMovie;
