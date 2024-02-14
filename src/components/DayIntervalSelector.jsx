import React, { useState } from "react";

function DayIntervalSelector({ onChange }) {
  const [selectedInterval, setSelectedInterval] = useState(90);
  const [customValue, setCustomValue] = useState("");

  const handleIntervalChange = (event) => {
    const value = event.target.value;
    setSelectedInterval(value);
    onChange(value);
  };

  const handleCustomInputChange = (event) => {
    const value = event.target.value;
    setCustomValue(value);
    onChange(value);
  };

  return (
    <div>
      <label>
        Select Day Interval:
        <select value={selectedInterval} onChange={handleIntervalChange}>
          <option value={30}>30 days</option>
          <option value={60}>60 days</option>
          <option value={90}>90 days</option>
          <option value="custom">Custom</option>
        </select>
      </label>
      {selectedInterval === "custom" && (
        <input
          type="number"
          value={customValue}
          onChange={handleCustomInputChange}
          placeholder="Enter custom interval"
        />
      )}
    </div>
  );
}

export default DayIntervalSelector;
