import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LyricsFinder from "./components/lyricsFinder/LyricsFinder";
import Home from "./components/home/Home";
import AddLyrics from "./components/addLyrics/AddLyrics";
import About from './components/about/About';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Foter';


function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/lyrics' element={<LyricsFinder/>} />
          <Route path='/addLyrics' element={<AddLyrics/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
