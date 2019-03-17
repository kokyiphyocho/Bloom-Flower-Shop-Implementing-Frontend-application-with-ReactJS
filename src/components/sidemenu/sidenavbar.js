import React, { Component } from "react";
import "./sidenavbar.css";

class SideNavBar extends Component {
  categories = [
    { id: "love", decription: "Love & Romance" },
    { id: "anniversary", decription: "Anniversary" },
    { id: "birthday", decription: "Birthday" },
    { id: "congradulation", decription: "Congradulation" },
    { id: "housewarming", decription: "House Warming" }
  ];

  getSideMenu = () => {
    const { sideMenuOpened, onCategoryClick } = this.props;

    return (
      <div
        className={
          "bg-light blm-sidenavbar " + (sideMenuOpened ? "blm-menuopened" : "")
        }
      >
        <div className="sidebar-heading p-2 pl-4 font-weight-bold">
          Catgories
        </div>

        <div className="list-group list-group-flush">
          {this.categories.map(c => (
            <a
              key={c.id}
              href={c.id}
              className="list-group-item list-group-item-action bg-light"
              onClick={e => {
                e.preventDefault();
                onCategoryClick(c.id);
              }}
            >
              {c.decription}
            </a>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return <React.Fragment> {this.getSideMenu()}</React.Fragment>;
  }
}

export default SideNavBar;
