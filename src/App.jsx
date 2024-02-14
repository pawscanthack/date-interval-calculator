import { useState } from "react";
import "./css/App.css";
import ReactCalendar from "./components/ReactCalendar.jsx";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const formattedDate = value.toLocaleDateString();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="App">
        <h1>Calendar</h1>
        <ReactCalendar value={selectedDate} onChange={handleDateChange} />
      </div>
      <div>
        <h1>{selectedDate.toLocaleDateString()}</h1>
      </div>
    </>
  );
}

export default App;
