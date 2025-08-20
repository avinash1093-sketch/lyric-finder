import App from "../../App";

const Logout = ({ setLoggedInUser }) => {
  localStorage.removeItem("token"); // Remove token from localStorage
  setLoggedInUser(null); // Set logged-in user to null
  return (
    <>
      <App />
    </>
  );
};
export default Logout;
