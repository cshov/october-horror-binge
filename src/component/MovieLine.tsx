import React from "react";
import './MovieLine.css';
import {Movie} from "../models/movie-models";

function MovieLine(props: { movieObject: Movie; }) {
    const movie: Movie = props.movieObject;

    const numFullPoints: number = Math.floor(movie.rating);
    const hasHalfPoint: boolean = movie.rating%1 !== 0;

    let ratingsMarkup = [];

    for(let i = 0; i < numFullPoints; i += 1) {
        ratingsMarkup.push(<span className="fullRating"></span>);
    }
    if (hasHalfPoint) {
        ratingsMarkup.push(<span className="halfRating"></span>);
    }

    return (
        <div className="line">
            <div className="year">{movie.year}</div>
            <div className="name"><a href={"https://www.imdb.com/title/"+ movie.imdbId + "/"}>{movie.name}</a></div>
            <div className="rating">{ratingsMarkup}</div>
        </div>
    );
}

export default MovieLine;
