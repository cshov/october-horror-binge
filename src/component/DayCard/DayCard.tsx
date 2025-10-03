import {Movie} from "../../models/movie-models";
import styles from './DayCard.module.css';
import React from "react";

export default class DayCard extends React.Component<{day: number, movies: Movie[]}> {
    render() {
        return <div className={styles.dayPanel}>
            <h2>October {this.props.day}</h2>
            <ul>
                {this.props.movies.map((movie: Movie, i) => (
                    <li key={i}>
                        <a href={"https://www.imdb.com/title/"+ movie.imdbId + "/"}>
                            <strong>{movie.name}</strong> ({movie.year})
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    }
}