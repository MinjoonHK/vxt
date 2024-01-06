import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./view/dashBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
