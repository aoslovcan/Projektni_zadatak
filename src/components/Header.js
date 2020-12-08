import React from "react";
import logo from "../assets/image/logo.png";
import "./Header.css";

function Header(props) {
  return (
    <div className=" header">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="title">
              <h3>Konfigurator servisa</h3>
              <h5>Izračunajte trošak servisa</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;