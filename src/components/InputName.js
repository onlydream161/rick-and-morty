import React from "react";
import { useLocation } from "react-router-dom";

const InputName = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  const location = useLocation();
  return (
    <label className="input__name-label">
      <input
        className="input__name"
        placeholder={
          location.pathname === "/episodes"
            ? "Filter by name or episode (ex. S01 or S01E02)"
            : "Filter by name"
        }
        onChange={handleChange}
      />
    </label>
  );
};

export default InputName;
