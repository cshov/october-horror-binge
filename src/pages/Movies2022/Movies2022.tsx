import React from "react";
import {Movie, MoviesByDay} from "../../models/movie-models";
import {getMoviesByDayWatched2022, getMoviesTotal2022} from "../../services/movies-query";
import '../StatsPage/StatsPage.css';
import './Movies2022.css';
// import MoviesPerDay from "../../component/MoviesPerDay/MoviesPerDay";


function Movies2022() {
    const moviesByDayArray: MoviesByDay[] = getMoviesByDayWatched2022();

    return (
        <div>
            <h2>October 2022 ({getMoviesTotal2022()} watched so far)</h2>

            {moviesByDayArray.map(({ day, movies }, i) => {
                return (

                    <div className="dayPanel">
                        <h3>{day}</h3>
                        <div className="movies">
                    {movies.map((movie: Movie, i) => (
                            <p>{movie.name} ({movie.year})</p>
                        ))}
                        </div>
                    </div>

                );
            })}

        </div>
    )
}

export default Movies2022;