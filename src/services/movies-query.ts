import Movies from "../data/movies.json";
import Movies2022 from '../data/movies2022.json';
import Movies2023 from '../data/movies2023.json';
import Movies2024 from '../data/movies2024.json';
import Movies2025 from '../data/movies2025.json';
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

export function getMoviesForDay2023(dayToCheck: number): Movie[] {
    return [...Movies2023].filter(movie => movie.dateWatched === dayToCheck);
}

export function getMoviesForDay2024(dayToCheck: number): Movie[] {
    return [...Movies2024].filter(movie => movie.dateWatched === dayToCheck);
}

export function getMoviesForDay2025(dayToCheck: number): Movie[] {
    return [...Movies2025].filter(movie => movie.dateWatched === dayToCheck);
}

export function getMoviesByDayWatched2022(): MoviesByDay[] {
    let days: MoviesByDay[] = [];

    for (let i = 1; i <= 31; i += 1) {
        days.push({day: i, movies: getMoviesForDay2022(i)});
    }

    return days;
}

export function getMoviesByDayWatched2023(): MoviesByDay[] {

    let numberOfDaysPassedInOctoberSoFar = 0;

    const now = new Date();
    if (now.getFullYear() === 2023 && now.getMonth() === 9) {
        numberOfDaysPassedInOctoberSoFar = now.getDate();
    } else {
        numberOfDaysPassedInOctoberSoFar = 31;
    }

    let days: MoviesByDay[] = [];

    for (let i = 1; i <= numberOfDaysPassedInOctoberSoFar; i += 1) {
        days.push({day: i, movies: getMoviesForDay2023(i)});
    }

    return days;
}

export function getMoviesByDayWatched2024(): MoviesByDay[] {

    let numberOfDaysPassedInOctoberSoFar = 0;

    const now = new Date();
    if (now.getFullYear() === 2024 && now.getMonth() === 9) {
        numberOfDaysPassedInOctoberSoFar = now.getDate();
    } else {
        numberOfDaysPassedInOctoberSoFar = 31;
    }

    let days: MoviesByDay[] = [];

    for (let i = 1; i <= numberOfDaysPassedInOctoberSoFar; i += 1) {
        days.push({day: i, movies: getMoviesForDay2024(i)});
    }

    return days;
}

export function getMoviesTotal2022(): number {
    return [...Movies2022].length;
}

export function getMoviesTotal2023(): number {
    return [...Movies2023].length;
}

export function getMoviesTotal2024(): number {
    return [...Movies2024].length;
}

export function getMoviesTotal2025(): number {
    return [...Movies2025].length;
}


