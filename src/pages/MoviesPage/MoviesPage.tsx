import React from "react";
import { getMoviesByDayWatched} from "../../services/movies-query";
import '../StatsPage/StatsPage.css';
import { MoviesByDay} from "../../models/movie-models";
import MoviesPerDay from "../../component/MoviesPerDay/MoviesPerDay";

function MoviesPage() {
    const moviesByDayArray: MoviesByDay[] = getMoviesByDayWatched();

    return (
        <div>
            {moviesByDayArray.map(({ day, movies }, i) => {
                return (
                    <MoviesPerDay key={i} day={day}></MoviesPerDay>
                );
            })}
        </div>
    );
}

export default MoviesPage;
