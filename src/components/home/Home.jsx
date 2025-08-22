import logo from "../../assets/logo.jpg";
import "../home/Home.css";
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
