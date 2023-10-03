import React from "react";
import {Movie, MoviesByDay} from "../../models/movie-models";
import {getMoviesByDayWatched2023, getMoviesTotal2023} from "../../services/movies-query";
// import '../StatsPage/StatsPage.css';
import './Movies2023.css';

function Movies2023() {
    const moviesByDayArray: MoviesByDay[] = getMoviesByDayWatched2023();

    return (
        <div className="twentyThree">
            <p>This is a list of all the horror movies I've watched in October 2023. So far, that list includes <strong>{getMoviesTotal2023()}</strong> different movies.</p>
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
                                <p><a href={"https://www.imdb.com/title/"+ movie.imdbId + "/"}><strong>{movie.name}</strong> ({movie.year})</a></p>
                            ))}
                        </div>

                    </div>
                );
            })}
        </div>
    )
}

export default Movies2023;