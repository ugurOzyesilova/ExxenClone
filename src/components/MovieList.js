import React, { useState, useEffect } from "react";
import "../styles/MovieList.css";
import Movies from "../components/Movies.js";

const MovieList = () => {
  const API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=108d4a6554d8e01ac6bb660407c569ce";
  const IMGAPI = "https://image.tmdb.org/t/p/w1280";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  console.log(movies);

  return (
    <div className="movieList">
      <div className="movieList__movies">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movies
              id={movie.id}
              title={movie.title}
              image={IMGAPI + movie.poster_path}
              overview = {movie.overview}
            />
          ))}
      </div>
      <div className="movieList__heading">
        <div>
          <h1>
            Popular
            <br />
            Movies to <br />
            Watch Right Now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
