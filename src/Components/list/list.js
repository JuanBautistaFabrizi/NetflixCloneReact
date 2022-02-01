import React from 'react';
import "./list.scss";
import {ArrowBackOutlined} from "@material-ui/icons";
import {ArrowForwardOutlined} from "@material-ui/icons";
import ListItem from '../listItem/listItem';


const List = () => {
  return (<div className='list'>
      <span className='listTittle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackOutlined className='sliderArrow left'/>
        <div className='container'>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardOutlined className='sliderArrow right'/>
      </div>
  </div>);
};

export default List;
