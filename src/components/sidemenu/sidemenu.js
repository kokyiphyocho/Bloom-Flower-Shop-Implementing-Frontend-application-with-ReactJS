import React, { Component } from "react";
import SideNavBar from "./sidenavbar";
import MenuBar from "./menubar";

class SideMenu extends Component {
  state = {
    sideMenuOpened: false
  };

  // MenuClick handler to filter the category.
  handleMenuClick = () => {
    let curentMenuState = this.state.sideMenuOpened;
    this.setState({ sideMenuOpened: !curentMenuState });
  };

  render() {
    const { mobileMode, onCategoryClick } = this.props;
    const { sideMenuOpened } = this.state;

    return (
      <React.Fragment>
        {/* render menubar component only on xs size i.e mobile devices */}
        {mobileMode ? <MenuBar onMenuClick={this.handleMenuClick} /> : null}

        <SideNavBar
          sideMenuOpened={sideMenuOpened && mobileMode}
          onCategoryClick={onCategoryClick}
        />
      </React.Fragment>
    );
  }
}

export default SideMenu;
