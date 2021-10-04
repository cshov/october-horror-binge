import React from "react";
import './CalendarDay.css';
// import {Movie} from "../models/movie-models";
import { getMoviesForDay } from "../../services/movies-query";

function CalendarDay(props: { day: number; }) {
    const dayToQuery = props.day;
    const dayCount = getMoviesForDay(props.day).length;

    return (
        <div className="day">
            <div className="dayLabel">{dayToQuery}</div>
            <div className="dayCount">{dayCount}</div>
        </div>
    );
}

export default CalendarDay;