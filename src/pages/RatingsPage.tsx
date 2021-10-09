import { getMovies, getMoviesSortedByRating } from "../services/movies-query";
import React from "react";

import './RatingsPage.css';
import {Movie} from "../models/movie-models";
import MovieLine from "../component/MovieLine";

function RatingsPage() {
    const moviesByRating = getMoviesSortedByRating();

    return (
        <div className="movieRatings">
            <h3>Movies Rated Best to Worst</h3>
            {moviesByRating.map((movie: Movie) => (
                <MovieLine movieObject={movie} />
            ))}
        </div>
    );
}

export default RatingsPage;
