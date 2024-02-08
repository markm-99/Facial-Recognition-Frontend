import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import nba from './nba.png';
import './Logo.css';

const Logo = () => {
  return (
   <div className='ma4 mt0'>
    <Tilt className="Tilt br2 shadow-3" options={{ max : 10 }} style = {{ height: 400, width: 200}}>
    <div className="Tilt-inner pa2"> <img src = {nba}></img> </div>
    </Tilt>
    </div>
  );
}

export default Logo;