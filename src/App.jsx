import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import LyricsFinder from "./components/lyricsFinder/LyricsFinder";
import Home from "./components/home/Home";
import AddLyrics from "./components/addLyrics/AddLyrics";
import Footer from "./components/footer/Foter";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lyrics" element={<LyricsFinder />} />
          <Route path="/addLyrics" element={<AddLyrics />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
