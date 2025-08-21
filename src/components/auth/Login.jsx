// client/src/components/Login.js
import { useState } from "react";
import axios from "axios";
import "./style.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Login = ({ setLoggedInUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://lyricsmarket.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", res.data.token);
      setLoggedInUser(email);
      navigate("/", { state: { email: email, name: res.data.data.name } });
      // Set success message
      setMessage("Logged in successfully");
    } catch (err) {
      console.error(err);
      // Set error message
      setMessage("Failed to login - wrong credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="message">{message}</p>
      </div>
    </>
  );
};

export default Login;
