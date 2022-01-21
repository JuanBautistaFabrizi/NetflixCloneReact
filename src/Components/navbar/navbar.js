import React from 'react';
import "./navbar.scss"
import {Search} from "@material-ui/icons";
import {Notifications} from "@material-ui/icons";

const Navbar = () => {
  return <>
  <div className='navbar'>
      <div className='container'>
          <div className='left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>My list</span>
          </div>
          <div className='right'>
            <Search/>
            <span>Kid</span>
            <Notifications/>  
          </div>
      </div>
  </div>
  </>
  

};

export default Navbar;
