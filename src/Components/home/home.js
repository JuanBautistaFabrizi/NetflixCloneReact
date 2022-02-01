import React from "react";
import Featured from "../featured/featured";
import List from "../list/list";
import Navbar from "../navbar/navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;
