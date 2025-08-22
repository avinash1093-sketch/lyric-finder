import logo from "../../assets/logo.jpg";
import img1 from "../../assets/lyric1.jpg";
import img2 from "../../assets/lyric2.jpg";
import img3 from "../../assets/lyrics3.jpg";
import img4 from "../../assets/lyrics4.jpg";
import img5 from "../../assets/lyrics5.jpg";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { email, name } = location.state || {};
  let userEmail = email;
  return (
    <>
      <Navbar userEmail={userEmail} />
      {userEmail ? (
        <>
          <div className="home-bg-notes">
            <span className="note note1">🎵</span>
            <span className="note note2">🎶</span>
            <span className="note note3">🎼</span>
            <span className="note note4">🎷</span>
            <span className="note note5">🎤</span>
          </div>
          <div className="home-container">
            <h1 className="home-title">Welcome to Lyric Market! {name}</h1>
            <img src={logo} alt="Lyric Market Logo" className="home-logo" />
          </div>
        </>
      ) : (
        <>
          <div className="home-bg-notes">
            <span className="note note1">🎵</span>
            <span className="note note2">🎶</span>
            <span className="note note3">🎼</span>
            <span className="note note4">🎷</span>
            <span className="note note5">🎤</span>
          </div>
          <div className="home-container">
            <h1 className="home-title">Welcome to Lyric Market!</h1>
            <img src={logo} alt="Lyric Market Logo" className="home-logo" />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
