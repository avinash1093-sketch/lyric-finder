import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "../navbar/Navbar.css";

const Navbar = ({ userEmail }) => {
  let [loggedInUser, setLoggedInUser] = useState(null);
  if (userEmail) {
    loggedInUser = userEmail;
  }
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setLoggedInUser(null); // Set logged-in user to null
    navigate('/')
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/lyrics">Find Lyrics</a>
              </li>
              <li>
                <a href="/addLyrics">Add Lyrics</a>
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
