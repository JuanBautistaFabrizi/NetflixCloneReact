import React from "react";
import Featured from "../featured/featured";
import Navbar from "../navbar/navbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <img
        width="100%"
          src="https://wwcsff.com/wp-content/uploads/2019/05/film-background-1334067869u9d.jpg"
          alt="imagen de películas y series"
        />
        <Featured/>
      </div>
    </>
  );
};

export default Home;
