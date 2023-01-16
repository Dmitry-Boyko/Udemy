import React from "react";
import northPic from "./images/north.jpg";
import southPic from "./images/south.jpg";
import "./hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: northPic,
  },
  Southern: {
    text: "it is southern hemisphere",
    picture: southPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segmant">
        <div className="image">
          <img src={picture} alt="hemisphere picture" />
        </div>
        <div className="ui teal bottom attached label">
          <hi>{text}</hi>
        </div>
      </div>
    </div>
  )
};

export default HemisphereDisplay;
