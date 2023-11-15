import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = () => {
  return (
    <div>
      <p>{"This Magic Brain Detects Faces i your pictures. Give It a Try."}</p>
      <div className="form">
        <div className="input-div">
          <input type="text" className="input" />
          <button className="btn">Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
