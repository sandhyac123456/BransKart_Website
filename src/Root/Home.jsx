import React from "react";
import "./Root.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="Home">
        <h5 className="Heading">
          <span>Welcome to BrainsKart</span>
        </h5>

        <p className="HomePara">
          Discover the joy of seamless shopping with Brainskaet. From trendy fashion to daily essentials, explore curated collections for Men, Women, and Kids — all in one place. Enjoy smooth browsing, secure payments, and doorstep delivery. Shop smart. Shop Brainskaet!
        </p>
        <button className="create-btn">
        <Link
          className="nav-link text-white" 
          to="/register"
        >
          Shop Now
        </Link>
        </button>
      </section>
    </>
  );
}
export default Home;
