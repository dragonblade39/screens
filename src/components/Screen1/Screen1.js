import React, { useState, useEffect, useRef } from "react";
import "./Screen1.css";
import data from "../data.json";
import "bootstrap-icons/font/bootstrap-icons.css";
import Screen2 from "../Screen2/Screen2";
import Screen3 from "../Screen3/Screen3";
import Screen4 from "../Screen4/Screen4";
import Screen5 from "../Screen5/Screen5";

const Screen1 = () => {
  const [treeData, setTreeData] = useState([]);
  const [expandedNodes, setExpandedNodes] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(window.innerWidth > 425);

  const navbarRef = useRef(null);

  useEffect(() => {
    setTreeData(data);

    const handleResize = () => {
      if (window.innerWidth > 425) {
        setIsNavbarOpen(true);
      } else {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (label) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleDoubleClick = (label) => {
    setSelectedNode(label);
  };

  const renderTree = (nodes, level = 0) => (
    <div key={nodes.label} className={`tree-node level-${level}`}>
      <div className="node-header node-label">
        {nodes.children && (
          <span className="arrow" onClick={() => handleToggle(nodes.label)}>
             
            {expandedNodes[nodes.label] ? (
              <i className="bi bi-arrow-down-circle-fill"></i>
            ) : (
              <i className="bi bi-arrow-right-circle"></i>
            )}
          </span>
        )}
        <span
          className={` ${expandedNodes[nodes.label] ? "bold" : ""}`}
          onDoubleClick={() => handleDoubleClick(nodes.label)}
        >
           {nodes.label}
        </span>
      </div>
      {nodes.children && expandedNodes[nodes.label] && (
        <div className="node-children">
          {nodes.children.map((child) => renderTree(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <button
        className="navbar-toggle"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        {isNavbarOpen ? (
          <i className="bi bi-arrow-left-circle"></i>
        ) : (
          <i className="bi bi-arrow-right-circle"></i>
        )}
      </button>
      <div className={`left-navbar ${isNavbarOpen ? "open" : "closed"}`} ref={navbarRef}>
        {treeData.map((node) => renderTree(node))}
      </div>

      {selectedNode === "C300_262" && (
        <div className="selected-container">
          <Screen2 />
        </div>
      )}
      {selectedNode === "C300_sim" && (
        <div className="selected-container">
          <Screen3 />
        </div>
      )}
      {selectedNode === "FIM4_299" && (
        <div className="selected-container">
          <Screen4 />
        </div>
      )}
      {selectedNode === "Unassigned" && (
        <div className="selected-container">
          <Screen5 />
        </div>
      )}
    </div>
  );
};

export default Screen1;
