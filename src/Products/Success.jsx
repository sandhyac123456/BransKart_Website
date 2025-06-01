import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <div className="success-container" style={{ background: "rgb(243, 200, 148)",width:"100vw",height:"90vh"}}>
        <h2>Order Success</h2>
        <div className="circle">
          <span className="checkmark">&#10004;</span>
        </div>
        <Link to="/">
          <button className="create-btn11">Done</button>
        </Link>
      </div>
    </>
  );
}
export default Success;
