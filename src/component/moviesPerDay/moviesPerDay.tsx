import { getMoviesForDay } from "../../services/movies-query";
import {Movie, MoviesByDay} from "../../models/movie-models";
import MovieLine from "../MovieLine";
import './moviesPerDay.css';

function MoviesPerDay(props: { day: number; }) {

    const moviesForDay = getMoviesForDay(props.day);

    let daySuffix = '';

    switch(props.day % 10) {
        case 0:
            daySuffix = 'th';
            break;
        case 1:
            daySuffix = 'st';
            break;
        case 2:
            daySuffix = 'nd';
            break;
        case 3:
            daySuffix = 'rd';
            break;
        case 4:
            daySuffix = 'th';
            break;
        case 5:
            daySuffix = 'th';
            break;
        case 6:
            daySuffix = 'th';
            break;
        case 7:
            daySuffix = 'th';
            break;
        case 8:
            daySuffix = 'th';
            break;
        case 9:
            daySuffix = 'th';
            break;
    }

    if(moviesForDay.length > 0) {
        return (
            <div className="dayMoviesWrapper">
                <p>
                    October {props.day}{daySuffix}
                </p>
                {moviesForDay.map((movie: Movie) => (
                    <MovieLine movieObject={movie} />
                ))}
            </div>
        )
    }
    return (
        <div className="displayNone"></div>
    )


}

export default MoviesPerDay;