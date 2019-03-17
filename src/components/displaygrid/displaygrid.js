import React, { Component } from "react";
import GridItem from "../griditem/griditem";
import PaginationBar from "../paginationbar/paginationbar";
import "./displaygrid.css";

class DisplayGrid extends Component {
  state = {};
  render() {
    const {
      productList,
      paginationInfo,
      screenSizeMode,
      onPageButtonClick
    } = this.props;

    if (productList && paginationInfo) {
      return (
        <div className="blm-datagrid">
          <div className="blm-gridcontent">
          
          {/* Render items in the grid.*/}
            {productList.map(p => (
              <GridItem key={p.ItemID} item={p} />
            ))}
          </div>

          {/* Render items pagination bar*/}
          <PaginationBar
            paginationInfo={paginationInfo}
            screenSizeMode={screenSizeMode}
            onPageButtonClick={onPageButtonClick}
          />
        </div>
      );
    } else return null;
  }
}

export default DisplayGrid;
