import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Error";
import Help from "./Help";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
