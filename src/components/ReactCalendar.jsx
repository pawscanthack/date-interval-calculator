import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/reactCalendar.css";

export default function ReactCalendar({ value, onChange }) {
  return (
    <>
      <div className="date-picker">
        <header>
          <h1>Pick a date</h1>
        </header>
        <div className="date-picker__container">
          <main className="date-picker__container__content">
            <Calendar onChange={onChange} showWeekNumbers value={value} />
          </main>
        </div>
      </div>
    </>
  );
}
