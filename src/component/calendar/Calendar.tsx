import { getMovies } from "../../services/movies-query";
import React from "react";

import './Calendar.css';
import CalendarDay from "./CalendarDay";

function Calendar() {

    const numOfMovies = getMovies().length;

    return (
        <div className="calendar">
            <div className="week">


                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <CalendarDay day={1}></CalendarDay>
            </div>
            <div className="week">
                <CalendarDay day={2}></CalendarDay>
                <CalendarDay day={3}></CalendarDay>
                <CalendarDay day={4}></CalendarDay>
                <CalendarDay day={5}></CalendarDay>
                <CalendarDay day={6}></CalendarDay>
                <CalendarDay day={7}></CalendarDay>
                <CalendarDay day={8}></CalendarDay>
            </div>
            <div className="week">
                <CalendarDay day={9}></CalendarDay>
                <CalendarDay day={10}></CalendarDay>
                <CalendarDay day={11}></CalendarDay>
                <CalendarDay day={12}></CalendarDay>
                <CalendarDay day={13}></CalendarDay>
                <CalendarDay day={14}></CalendarDay>
                <CalendarDay day={15}></CalendarDay>
            </div>
            <div className="week">
                <CalendarDay day={16}></CalendarDay>
                <CalendarDay day={17}></CalendarDay>
                <CalendarDay day={18}></CalendarDay>
                <CalendarDay day={19}></CalendarDay>
                <CalendarDay day={20}></CalendarDay>
                <CalendarDay day={21}></CalendarDay>
                <CalendarDay day={22}></CalendarDay>
            </div>
            <div className="week">
                <CalendarDay day={23}></CalendarDay>
                <CalendarDay day={24}></CalendarDay>
                <CalendarDay day={25}></CalendarDay>
                <CalendarDay day={26}></CalendarDay>
                <CalendarDay day={27}></CalendarDay>
                <CalendarDay day={28}></CalendarDay>
                <CalendarDay day={29}></CalendarDay>
            </div>
            <div className="week">
                <CalendarDay day={30}></CalendarDay>
                <CalendarDay day={31}></CalendarDay>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
            </div>

        </div>
    );
}

export default Calendar;
