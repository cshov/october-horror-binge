import {getMovies, getMoviesByDayWatched} from "../services/movies-query";
import React from "react";

import './StatsPage.css';
import {Movie, MoviesByDay} from "../models/movie-models";
import MovieLine from "../component/MovieLine";
import MoviesPerDay from "../component/moviesPerDay/moviesPerDay";

function MoviesPage() {

    const movies: Movie[] = getMovies();

    const moviesByDayArray: MoviesByDay[] = getMoviesByDayWatched();
    console.log(moviesByDayArray);

    return (
        <div>
            {moviesByDayArray.map(({ day, movies }) => {
                return (
                    <MoviesPerDay day={day}></MoviesPerDay>
                );

            })}
        </div>
    );
}

// {movies.map(movie => (
//     <MovieLine movieObject={movie} />
// ))}

export default MoviesPage;
