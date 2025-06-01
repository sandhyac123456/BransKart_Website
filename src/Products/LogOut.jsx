// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Logout() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     localStorage.removeItem("user");
//     navigate("/login"); // logout ke baad login page pe bhej do
//     window.location.reload();
//   }, []);
//   return null; // koi UI zarurat nahi
// }

// export default Logout;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/authSlice";  // adjust path

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());       // clears Redux state and localStorage
    navigate("/login");      // send user to login page
  }, [dispatch, navigate]);

  return null;
}

export default Logout;
