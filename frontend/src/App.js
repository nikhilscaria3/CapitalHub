import About from './Components/AboutComponent';
import './App.css';
import ContactUs from './Components/ContactusComponent';
import Homepage from './Components/Homepage';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
