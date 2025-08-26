// client/src/components/Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"; // Import CSS for styling
import Navbar from "../navbar/Navbar";
import UrlDomain from "../../utils/UrlDomain";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${UrlDomain()}/api/auth/register`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log(res);
      localStorage.setItem("token", res.data.token);
      setMessage("Registered successfully"); // Set success message
      navigate("/", { state: { email: email, name: res.data.info.name } });
    } catch (err) {
      console.error(err.response.data);
      setMessage("Failed to register, User already exists"); // Set error message
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={onChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={onChange}
            required
          />
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
          <button type="submit">Register</button>
        </form>
        <p className="message">{message}</p>
      </div>
    </>
  );
};

export default Register;
