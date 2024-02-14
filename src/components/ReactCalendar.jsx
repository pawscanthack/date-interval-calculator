import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/reactCalendar.css";

export default function Sample() {
  const [value, onChange] = useState(new Date());

  // Convert the Date object to a string in a readable format
  const formattedDate = value.toLocaleDateString();

  return (
    <>
      <div className="date-picker">
        <header>
          <h1>Pick a date, Zoki</h1>
        </header>
        <div className="date-picker__container">
          <main className="date-picker__container__content">
            <Calendar onChange={onChange} showWeekNumbers value={value} />
          </main>
        </div>
      </div>
      <div>
        {/* Display the formatted date */}
        <h1>{formattedDate}</h1>
      </div>
    </>
  );
}
