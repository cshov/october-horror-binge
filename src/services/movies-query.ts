import Movies from "../data/movies.json";
import { Movie } from "../models/movie-models";

export function getMovies(): Movie[] {
    return Movies;
}

export function getMovieTitles(): string[] {
    const movieTitles: Movie[] = Movies;
    return movieTitles.map((movie: Movie) => movie.name);
}

