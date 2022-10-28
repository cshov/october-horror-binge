import Movies from "../data/movies.json";
import Movies2022 from '../data/movies2022.json';
import {Movie, MoviesByDay} from "../models/movie-models";

export function getMovies(): Movie[] {
    return Movies;
}

export function getMoviesSortedByRating(): Movie[] {

    const clonedMovies: Movie[] = [...Movies];
    return clonedMovies.sort((a, b) => (a.rating! < b.rating!) ? 1 : -1);
}

export function getMovieTitles(): string[] {
    const movieTitles: Movie[] = [...Movies];
    return movieTitles.map((movie: Movie) => movie.name);
}

export function getMoviesForDay(dayToCheck: number): Movie[] {
    return [...Movies].filter(movie => movie.dateWatched === dayToCheck);
}

export function getMoviesByDayWatched(): MoviesByDay[] {
    let days: MoviesByDay[] = [];

    for (let i = 1; i <= 31; i += 1) {
        days.push({day: i, movies: getMoviesForDay(i)});
    }

    return days;
}

export function getMoviesForDay2022(dayToCheck: number): Movie[] {
    return [...Movies2022].filter(movie => movie.dateWatched === dayToCheck);
}

export function getMoviesByDayWatched2022(): MoviesByDay[] {
    let days: MoviesByDay[] = [];

    for (let i = 1; i <= 31; i += 1) {
        days.push({day: i, movies: getMoviesForDay2022(i)});
    }

    return days;
}

export function getMoviesTotal2022(): number {
    return [...Movies2022].length;
}


