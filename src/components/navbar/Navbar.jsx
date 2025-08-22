import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "../navbar/Navbar.css";

const Navbar = ({ userEmail }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    setLoggedInUser(userEmail);
  }, [userEmail]);

  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/", { state: { email: loggedInUser } });
  };

  const handleFindLyrics = (e) => {
    e.preventDefault();
    navigate("/lyrics", { state: { email: loggedInUser } });
  };

  const handleAddLyrics = (e) => {
    e.preventDefault();
    navigate("/addLyrics", { state: { email: loggedInUser } });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token"); // Remove token from localStorage
    setLoggedInUser(null); // Set logged-in user to null
    navigate("/");
  };

  return (
    <>
      {loggedInUser ? (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </Link>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="/" onClick={handleHome}>
                  Home
                </a>
              </li>
              <li>
                <a href="/lyrics" onClick={handleFindLyrics}>
                  Find Lyrics
                </a>
              </li>
              <li>
                <a href="/addLyrics" onClick={handleAddLyrics}>
                  Add Lyrics
                </a>
              </li>
              <li>
                <a href="/" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </Link>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;