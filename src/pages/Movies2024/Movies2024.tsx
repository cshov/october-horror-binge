import React from 'react';
import {getMoviesByDayWatched2024, getMoviesTotal2024} from "../../services/movies-query";
import './Movies2024.css';
import {Movie, MoviesByDay} from "../../models/movie-models";


function Movies2024() {

    const moviesByDayArray: MoviesByDay[] = getMoviesByDayWatched2024();

    return (

        <div className="twentyThree">
            <p>Decided to go a different direction for October 2024. I'm going to watch a complete franchise every day and I've watched {getMoviesTotal2024()} movies so far this month.</p>

            {moviesByDayArray.map(({ day, movies }, i) => {
                return (
                    <div className="dayPanel">

                        <div className="dayMonthLabel">
                            <span className="spacer"></span>
                            <span className="monthLabel">OCT</span>
                            <span className="day">{day}</span>
                        </div>

                        <div className="movies">
                            {movies.map((movie: Movie, i) => (
                                <p><a href={"https://www.imdb.com/title/"+ movie.imdbId + "/"}><strong>{movie.name}</strong> ({movie.year}){movie.wasExtraCredit ? '*' : ''}</a></p>
                            ))}
                        </div>

                    </div>
                );
            })}


        </div>


    )
}

export default Movies2024;
