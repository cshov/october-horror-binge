import DayCard from "../../component/DayCard/DayCard";
import {getMoviesForDay2025, getMoviesTotal2025} from "../../services/movies-query";
import styles from './Movies2025.module.css';
import React from "react";

export default function Movies2025() {
    return (
        <div className={styles.days}>
            <p>No strategy to my list this year. All spontaneous choices. I've watched {getMoviesTotal2025()} movies so far this month.</p>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day: number) => (
                <>
                    {getMoviesForDay2025(day).length > 0 ? <div key={day}><DayCard day={day} movies={getMoviesForDay2025(day)} /></div> : <></>}
                </>
            ))}
        </div>
    );
}