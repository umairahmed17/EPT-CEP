import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Tower from "./components/admin/Tower";
import TowerDisplay from "./components/TowerDisplay";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Tower />} />
        <Route path="/tower/:id" element={<TowerDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
