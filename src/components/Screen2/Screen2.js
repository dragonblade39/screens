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
        {selectedOptionContent?.children.map((field, index) => (
          <div key={index} className="label-input-container">
            <label htmlFor={field.label}>{field.label}:</label>
            {field.type === "checkbox" ? (
              <input
                type="checkbox"
                id={field.label}
                className="custom-checkbox"
              />
            ) : (
              <input
                type={field.type}
                id={field.label}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>
      {selectedOption === "Main" ? (
        <div className="content-container">
          {/* Left Side Content */}
          <div className="left-content">
              <div className="input-fields">
                <div className="screen2_main_tagname">
                  <label>Tag Name: </label>
                  <input size="37" className="screen2_label " type="text" />
                </div>
                <div className="screen2_main_tagname">
                  <label>Item Name #: </label>
                  <input size="37" className="screen2_label " type="text" />
                </div>
                <div className="screen2_main_tagname">
                  <label>Application Image Version: </label>
                  <input size="37" className="screen2_label " type="text" />
                </div>
                <div className="screen2_main_tagname screen2_special">
                  <label>Controller Command: </label>
                  <select className="screen2_label screen2_select" disabled>
                    <option value="NONE">NONE</option>
                    <option value="Option1">Option1</option>
                    <option value="Option2">Option2</option>
                  </select>
                </div>
                <div className="screen2_main_tagname">
                  <label>Associated Asset #: </label>
                  <input size="37" className="screen2_label " type="text" />
                </div>
                <div className="screen2_main_tagname screen2_special">
                  <label>Target Platform (Model): </label>
                  <select className="screen2_label screen2_select" disabled>
                    <option value="NONE">NONE</option>
                    <option value="Option1">Option1</option>
                    <option value="Option2">Option2</option>
                  </select>
                </div>
                <div className="screen2_main_tagname ">
                  <label>Platform Type: </label>
                </div>
                <div className="network-config-container">
                  <div className="screen2_lineinsert">
                    <label>Network address Configuration </label>
                  </div>
                  <div className="screen2_main_tagname">
                    <label>Device Index </label>
                    <input size="37" className="screen2_label " type="text" />
                  </div>
                  <div className="screen2_main_tagname">
                    <label>Ethernet IP Address </label>
                    <label>10.78.80.51 </label>
                  </div>
                  <div className="screen2_main_tagname">
                    <label>Certificate Authority IP Address</label>
                  </div>
                </div>
                <div className="right-content">
                  <div className="input-fields">
                    <div className="network-config-container">
                      <div className="screen2_lineinsert">
                        <label>Ethernet Protocol Supported </label>
                      </div>
                      <div>
                        <input className="screen2_label " type="checkbox" />
                        &ensp;
                        <label>EtherNet/IP </label>
                      </div>
                    </div>
                    <div className="network-config-container">
                      <div className="screen2_main_tagname">
                        <label>State Information </label>
                      </div>
                      <div className="screen2_main_tagname">
                        <label>Control State </label>
                        <label>NOT LOADED </label>
                      </div>
                      <div className="screen2_main_tagname">
                        <label>Redundancy role </label>
                        <label>UNDEFINED </label>
                      </div>
                      <div className="screen2_main_tagname">
                        <label>Syncronization State</label>
                        <label>----</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Right Side Content */}
          <div className="right-content">
              <div className="input-fields">
                <div className="network-config-container">
                  <div>
                    <label>
                      Enable Extended CC-PCNT02 Feature Configuration{" "}
                    </label>
                  </div>
                  <div>
                    <label>
                      <br />
                      Checking this box indicates that the downloaded controller
                      image will support extended features, such as Experion
                      Profit Control and Ethemet Interface Module
                    </label>
                  </div>
                  <br />
                  <div className="screen2_lineinsert">
                    <label>Feature Configuration #</label>
                  </div>
                  <div>
                    <input className="screen2_label " type="checkbox" />
                    &ensp;
                    <label>Enable Extended Feature Configuration </label>
                  </div>
                  <br />
                  <div>
                    <label>Controller Capability: </label>
                  </div>
                </div>
                <div className="network-config-container">
                  <div>
                    <label>Redundancy Configuration </label>
                  </div>
                  <br />
                  <div>
                    <input className="screen2_label " type="checkbox" />
                    &ensp;
                    <label>Module is redundant</label>
                  </div>
                  <br />
                  <div>
                    <label>Secondary Tag Name</label>
                  </div>
                </div>
                <br />
                <div className="network-config-container">
                  <div>
                    <label>Ethernet IP/Communication Mode </label>
                  </div>
                  <br />
                  <div className="screen2_main_tagname screen2_special">
                    <label>Communication Mode: </label>
                    <select className="screen2_label screen2_select" disabled>
                      <option value="NONE">Direct Connection</option>
                      <option value="Option1">Option1</option>
                      <option value="Option2">Option2</option>
                    </select>
                  </div>
                  <br />
                  <div >
                    <button className="screen2_resetbutton" dissabled>Reset EIM Associations</button>
                  </div>
                </div>

                <div className="network-config-container">
                  <div>
                    <label>Advanced Configuration </label>
                  </div>
                  <br />
                  <div>
                    <input className="screen2_label " type="checkbox" />
                    &ensp;
                    <label>Alarming Enabled </label>
                  </div>
                  <div>
                    <input className="screen2_label " type="checkbox" />
                    &ensp;
                    <label>Dissable memory retentions and Alerts </label>
                  </div>
                  <br />
                  <div className="screen2_main_tagname">
                    <label>Temperature High Alarm (degC) </label>
                    <input size="33" className="screen2_label " type="text" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      ) : (
        <></>
      )}
      <div className="button-container">
        <button className="screen2-button ok-btn">OK</button>
        <button className="screen2-button cancel-btn">Cancel</button>
        <button className="screen2-button help-btn">Help</button>
      </div>
    </div>
  );
};

export default Screen2;
