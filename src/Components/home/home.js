import React from "react";
import Featured from "../featured/featured";
import Navbar from "../navbar/navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      
      <Featured type="movie" />
    </div>
  );
};

export default Home;
