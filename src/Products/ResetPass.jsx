import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";


function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/auth/reset-password/${token}`, { password });
      setMsg("Password reset successful!");
      alert("Password reset successful!")
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMsg(err.response?.data?.error || "Something went wrong");
    console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
              <div className="row" style={{ width: "500px" }}>

      <h4 className="heading1">Reset Password</h4>
      <form className="dot1" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
                        className="form-control mt-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mt-3">
              Reset password
            </button>
            </div>      </form>
      <p style={{marginTop:"10px" , fontWeight:"20px"}}>{msg}</p>
      </div>
    </div>
  );
}

export default ResetPassword;
