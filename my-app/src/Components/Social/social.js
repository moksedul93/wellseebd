import React from "react";
import "../Social/social.css";
import imgabout from '../../Assets/images/about-lt.png'

export default function social() {
  return (
    <div className="socail">
      <div className="row">
        <div className="col-sm-6">
          <div className="socail">
            <img src={imgabout} alt="about-lt.png"/>
          </div>
        </div>
        <div className="col-sm-6">
            <div className="socailbtn"><a href="#">Social</a></div>
        </div>
      </div>
    </div>
  );
}
