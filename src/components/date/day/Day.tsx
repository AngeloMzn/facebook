import React from "react";

interface Props {
  selectValue?: any;
  handleSelect?: any;
}

const selectStyle = {
  borderRadius: "4px",
  color: "#1c1e21",
  fontSize: "15px",
  border: "1px solid #ccd0d5",
  outline: "none",
  height: "36px",
  fontWeight: "normal",
  lineHeight: "20px",
  padding: "0 8px",
  width: "123px",
  backgroundColor: "transparent",
  marginTop: "2px",
};

const days = Array.from({ length: 31 }, (_, i) => i + 1);

const Day: React.FC<Props> = ({ selectValue, handleSelect }) => {
  return (
    <select
      aria-label="Day"
      name="birthday_day"
      style={selectStyle}
      value={selectValue}
      onChange={handleSelect}
      id="day"
      title="Day"
    >
      <option value="">Day</option>
      {days.map(day => (
        <option key={day} value={day}>{day}</option>
      ))}
    </select>
  );
};

export default React.memo(Day);