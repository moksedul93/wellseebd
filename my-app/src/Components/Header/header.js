import React from "react";
import logo from "../../Assets/images/logo.jpg";
import "../Header/header.css";

export default function header() {
  return (
    <div>
      <header className="App-header">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo">
              <img src={logo} />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="menu">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Social</a>
                </li>
                <li>
                  <a href="#">E-commerce</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
