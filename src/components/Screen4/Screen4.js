import React, { useState, useEffect } from "react";
import "../Screen1/Screen1.css";
import "../Screen2/Screen2.css";
import options from "../options.json";
import optionsContent from "../optionContent.json";

const Screen4 = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 426);
  const [isOptionsVisible, setIsOptionsVisible] = useState(true);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (isMobile) setIsOptionsVisible(false);
  };

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 426);
      if (window.innerWidth >= 426) setIsOptionsVisible(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Find the selected option's corresponding fields from optionsContent.json
  const selectedOptionContent = optionsContent.find(
    (item) => item.label === selectedOption
  );

  return (
    <div className="screen-container">
      {isMobile && (
        <button className="toggle-btn" onClick={toggleOptionsVisibility}>
          {isOptionsVisible ? "▲" : "▼"}
        </button>
      )}

      <div className={`options-container ${isMobile && !isOptionsVisible ? "hidden" : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className={`option ${selectedOption === option ? "selected-option" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="input-fields">
        {selectedOptionContent?.children.map((field, index) => (
          <div key={index} className="label-input-container">
            <label htmlFor={field.label}>{field.label}:</label>
            {field.type === "checkbox" ? (
              <input type="checkbox" id={field.label} className="custom-checkbox" />
            ) : (
              <input type={field.type} id={field.label} placeholder={field.placeholder} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen4;
