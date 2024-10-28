import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryConatiner() {
  const movies = useSelector((store) => store.movies);
  return <div>
    <MovieList title={"Now Playing"} movies={movies.getNowPlayingMovie} />
  </div>;
}

export default SecondaryConatiner;
