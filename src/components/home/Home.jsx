import logo from "../../assets/logo.jpg";
import img1 from "../../assets/lyric1.jpg";
import img2 from "../../assets/lyric2.jpg";
import img3 from "../../assets/lyrics3.jpg";
import img4 from "../../assets/lyrics4.jpg";
import img5 from "../../assets/lyrics5.jpg";
import "./Home.css";

const Home = ({ userEmail }) => {
  return (
    <>
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
            <h1 className="home-title">Welcome to Lyric Market! {userEmail}</h1>
            <img src={logo} alt="Lyric Market Logo" className="home-logo" />
            <div className="lyrical-images-row">
              <img src={img1} alt="lyrical" className="lyrical-img" />
              <img src={img2} alt="lyrical" className="lyrical-img" />
              <img src={img3} alt="lyrical" className="lyrical-img" />
              <img src={img4} alt="lyrical" className="lyrical-img" />
              <img src={img5} alt="lyrical" className="lyrical-img" />
            </div>
            <p className="home-desc">
              Lyric Market is your one-stop destination for searching song
              lyrics from your favorite artists and tracks.
            </p>
            <ul className="home-features">
              <li>🔍 Search lyrics by artist and song name</li>
              <li>📝 Add new lyrics to our growing database</li>
              <li>📖 Discover and explore lyrics from various genres</li>
              <li>💬 Contact us for feedback or lyric requests</li>
            </ul>
            <p className="home-action">
              Start your search now by navigating to the <b>Lyrics Finder</b>{" "}
              page, or contribute by adding new lyrics!
            </p>
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
            <div className="lyrical-images-row">
              <img src={img1} alt="lyrical" className="lyrical-img" />
              <img src={img2} alt="lyrical" className="lyrical-img" />
              <img src={img3} alt="lyrical" className="lyrical-img" />
              <img src={img4} alt="lyrical" className="lyrical-img" />
              <img src={img5} alt="lyrical" className="lyrical-img" />
            </div>
            <p className="home-desc">
              Lyric Market is your one-stop destination for searching song
              lyrics from your favorite artists and tracks.
            </p>
            <ul className="home-features">
              <li>🔍 Search lyrics by artist and song name</li>
              <li>📝 Add new lyrics to our growing database</li>
              <li>📖 Discover and explore lyrics from various genres</li>
              <li>💬 Contact us for feedback or lyric requests</li>
            </ul>
            <p className="home-action">
              Start your search now by navigating to the <b>Lyrics Finder</b>{" "}
              page, or contribute by adding new lyrics!
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
