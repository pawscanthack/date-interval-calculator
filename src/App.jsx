import { useState } from "react";
import "./css/App.css";
import Sample from "./components/ReactCalendar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Calendar</h1>
        <Sample />
      </div>
    </>
  );
}

export default App;
