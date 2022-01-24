import React from 'react';
import "./featured.scss";
import {PlayArrow} from "@material-ui/icons";
import {InfoOutlined} from "@material-ui/icons";

const Featured = () => {
  return <div className='featured'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fondo_Negro.jpg" alt="featured" />
      <div className='info'>
          <img src="https://i.ytimg.com/vi/GHyRzUoA5ts/maxresdefault.jpg" alt="" />
          <span className='desc'>asdasdasdsdasdaasdsdasd</span>
          <div className='buttons'>
              <button className='play'>
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <button className='more'>
                  <InfoOutlined/>
                  <span>Info</span>
              </button>
          </div>
      </div>
  </div>;
};

export default Featured;
