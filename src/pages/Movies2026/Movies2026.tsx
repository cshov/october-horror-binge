import DayCard from "../../component/DayCard/DayCard";
import {getMoviesForDay2026, getMoviesTotal2026} from "../../services/movies-query";
import styles from './Movies2026.module.css';
import React from "react";

export default function Movies2026() {
    return (
        <div className={styles.days}>
            <p>No strategy to my list this year. All spontaneous choices. I've watched {getMoviesTotal2026()} movies so far this month.</p>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day: number) => (
                <>
                    {getMoviesForDay2026(day).length > 0 ? <div key={day}><DayCard day={day} movies={getMoviesForDay2026(day)} /></div> : <></>}
                </>
            ))}
        </div>
    );
}