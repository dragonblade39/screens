import React, { useState, useEffect } from "react";
import "../Screen1/Screen1.css";
import "../Screen2/Screen2.css";
import options from "../options.json";
import optionsContent from "../optionContent.json";

const Screen2 = () => {
  const [selectedOption, setSelectedOption] = useState(options[8]);
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

      <div
        className={`options-container ${
          isMobile && !isOptionsVisible ? "hidden" : ""
        }`}
      >
        {options.map((option) => (
          <div
            key={option}
            className={`option ${
              selectedOption === option ? "selected-option" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="input-fields">
        <div className="screen2_main_tagname">
          <label>Tag Name: </label>
          <input size="75" className="screen2_label " type="text" />
        </div>
        <div className="screen2_main_tagname">
          <label>Item Name #: </label>
          <input size="37" className="screen2_label " type="text" />
        </div>
        <div>
          <label>Application Image Version</label>
        </div>
        <div className="screen2_main_tagname screen2_special">
          <label>Control Command </label>
          <select className="screen2_label screen2_select" disabled>
            <option value="NONE">NONE</option>
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
          </select>
        </div>
        <div className="screen2_main_tagname">
          <label>Associated Asset: </label>
          <input size="37" className="screen2_label " type="text" />
        </div>
        <div className="screen2_main_tagname screen2_special">
          <label>Target Platform (Model) </label>
          <select className="screen2_label screen2_select" disabled>
            <option value="NONE">NONE</option>
            <option value="Option1">Option1</option>
            <option value="Option2">Option2</option>
          </select>
        </div>
        <div>
          <label>Platform</label>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
