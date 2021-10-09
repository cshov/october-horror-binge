import React from "react";
import './CalendarDay.css';
import { getMoviesForDay } from "../../services/movies-query";

function CalendarDay(props: { day: number; }) {
    const dayToQuery = props.day;
    const moviesForDay = getMoviesForDay(props.day);
    const dayCount = moviesForDay.length;
    const movieNames = moviesForDay.flatMap(movie => movie.name);
    const titleString = movieNames.join('\n');

    return (
        <div className="day" title={titleString}>
            <div className="dayLabel">{dayToQuery}</div>
            <div className="dayCount">{dayCount}</div>
        </div>
    );
}

export default CalendarDay;
