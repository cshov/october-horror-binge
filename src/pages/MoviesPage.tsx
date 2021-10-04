import { getMovies } from "../services/movies-query";
import React from "react";

import './StatsPage.css';
import {Movie} from "../models/movie-models";
import MovieLine from "../component/MovieLine";

function MoviesPage() {

    const movies: Movie[] = getMovies();


    return (
        <div>
            {movies.map(movie => (
                <MovieLine movieObject={movie} />
            ))}
        </div>
    );
}

export default MoviesPage;
