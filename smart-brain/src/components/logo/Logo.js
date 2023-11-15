import React from "react";
import { Tilt } from "react-tilt";
import '../logo/Logo.css'
import brain from '../logo/brain.png'
const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="tilt" options={{max:20}} style={{ height: 150, width: 150 }}>
        <div><img src={brain} alt= "logo"/></div>
      </Tilt>
    </div>
  );
};

export default Logo;
