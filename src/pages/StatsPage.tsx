import { getMovies } from "../services/movies-query";
import React from "react";

import './StatsPage.css';
import Calendar from "../component/calendar/Calendar";

function StatsPage() {
    const numOfMovies = getMovies().length;

    return (
        <div className="bingeStats">
            <div className="statRow">
                <div className="statContainer">
                    <h3>Total Movies: {numOfMovies}</h3>
                </div>
            </div>
            <Calendar></Calendar>
        </div>
    );
}

export default StatsPage;
