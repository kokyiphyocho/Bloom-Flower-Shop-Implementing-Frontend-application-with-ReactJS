import React from "react";
import "./banner.css";
import Logo from "../../images/logo.png";

const Banner = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light blm-banner">
        <div className="container bg-transparent justify-content-start">
          <div className="navbar-brand">
            <img
              className="d-inline-block"
              style={{ width: 146, height: 50 }}
              src={Logo}
              alt=""
            />
          </div>
          <h1 className="pt-3">
            {/* Display ths <span> tag in md or larger size */}            
            <span className="d-none d-md-inline-block">Bloom Flowers</span>
            {/* Display ths <span> tag in sm or larger size */}
            <span
              className="text-muted ml-3 d-none d-sm-inline-block"
              style={{ fontSize: "50%" }}
            >
              . . . . . more than just flowers
            </span>
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Banner;
