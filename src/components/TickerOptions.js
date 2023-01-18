import React from "react";

const TickerOptions = () => {
  const options = [
    { value: "VDHG", label: "VDHG" },
    { value: "CBA", label: "CBA" },
    { value: "DHHF", label: "DHHF" },
    { value: "HACK", label: "HACK" },
  ];

  // Sort the options array in alphabetical order
  options.sort((a, b) => a.label.localeCompare(b.label));

  return (
    <>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </>
  );
};

export default TickerOptions;
