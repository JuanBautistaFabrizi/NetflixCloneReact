import React from 'react';
import './listItem.scss';
import {PlayArrow,Add,ThumbUpOutlined,ThumbDownAltOutlined} from '@material-ui/icons';

const ListItem = () => {
  return (
    <div className='listItem'>
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/12/19/16399524819846.jpg" alt="imagen de pelicula" />
        <div className='itemInfo'>
          <div className='icons'>
            <PlayArrow/>
            <Add/>
            <ThumbUpOutlined/>
            <ThumbDownAltOutlined/>
          </div>
        </div>
    </div>
  );
      
};

export default ListItem;
