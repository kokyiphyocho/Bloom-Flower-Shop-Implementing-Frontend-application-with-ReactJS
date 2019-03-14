import React, { Component } from "react";
import "./menubar.css";

class MenuBar extends Component {
  render() {
    const { onMenuClick } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-1 pb-1 blm-menubar">
        <button className="navbar-toggler" type="button" onClick={onMenuClick}>
          <span className="navbar-toggler-icon " />
        </button>
      </nav>
    );
  }
}

export default MenuBar;
