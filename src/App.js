import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Screen1 from "./components/Screen1/Screen1";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Screen1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
