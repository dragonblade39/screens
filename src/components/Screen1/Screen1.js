import React, { useState, useEffect, useRef } from "react";
import "./Screen1.css";
import data from "../data.json";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Screen1 = () => {
  const [treeData, setTreeData] = useState([]);
  const [expandedNodes, setExpandedNodes] = useState({});
  const navbarRef = useRef(null);

  useEffect(() => {
    setTreeData(data);
  }, []);

  const handleToggle = (label) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleDoubleClick = (label) => {
    alert(`You double-clicked on ${label}`);
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
          className={`node-label ${expandedNodes[nodes.label] ? "bold" : ""}`}
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
      <div className="left-navbar" ref={navbarRef}>
        {treeData.map((node) => renderTree(node))}
      </div>
      <div className="content">
        <h1>Static Page Content</h1>
        <p>This is a static page with a tree-structured navbar on the left.</p>
      </div>
    </div>
  );
};

export default Screen1;
