import React from "react";
import "./navbar.scss";
import { Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt="netflix logo"
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>My list</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>Kids</span>
            <Notifications className="icon" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
              alt="imagen del usuario"
            />
            <div className="profile">
            <ArrowDropDown className="icon" />
             <div className="options">
               <span>Settings</span>
               <span>Logout</span>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
