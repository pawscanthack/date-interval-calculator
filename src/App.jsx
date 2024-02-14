import { useState, useRef } from "react";
import "./css/App.css";
import ReactCalendar from "./components/ReactCalendar.jsx";
import DayIntervalSelector from "./components/DayIntervalSelector";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedInterval, setSelectedInterval] = useState(90);
  const [resultDate, setResultDate] = useState(null);
  const resultRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    calculateResultDate(date, selectedInterval);
  };

  const handleIntervalChange = (value) => {
    setSelectedInterval(value);
    calculateResultDate(selectedDate, value);
  };

  const calculateResultDate = (date, interval) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + parseInt(interval));
    setResultDate(newDate);
  };

  const copyToClipboard = () => {
    if (resultRef.current) {
      navigator.clipboard.writeText(resultRef.current.textContent);
    }
  };

  return (
    <>
      <div className="app">
        <h1>Password Reset Calulator</h1>
        <ReactCalendar value={selectedDate} onChange={handleDateChange} />
      </div>
      <div>
        <h1>Start Date</h1>
        <hr />
        <p>{selectedDate.toLocaleDateString()}</p>
      </div>
      <div>
        <h1>Day Interval Selector</h1>
        <hr />
        <DayIntervalSelector onChange={handleIntervalChange} />
        <p>Selected Interval: {selectedInterval}</p>
      </div>
      <div>
        <h1>Result Date</h1>
        <hr />
        <a
          onClick={copyToClipboard}
          ref={resultRef}
          style={{ cursor: "pointer" }}
        >
          {resultDate ? resultDate.toLocaleDateString() : ""}
        </a>
      </div>
    </>
  );
}

export default App;
