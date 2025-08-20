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
    let [loggedInUser, setLoggedInUser] = useState(null);
    console.log(`App-LoggedInUSER========`, loggedInUser);
  return (
    <>
      <Router>
        <Navbar userEmail={loggedInUser} />
        <Routes>
          <Route path="/" element={<Home userEmail={loggedInUser} />} />
          <Route path="/lyrics" element={<LyricsFinder userEmail={loggedInUser}/>} />
          <Route path="/addLyrics" element={<AddLyrics userEmail={loggedInUser} />} />
          <Route path="/register" element={<Register setLoggedInUser={setLoggedInUser} />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
