import React, { Component } from "react";
import "./griditem.css";

class GridItem extends Component {
  render() {
    const { item } = this.props;
    const images = require.context("../../images/bouquet", true);
    return (
      <div className="blm-griditem" key={item.ItemID} id={item.ItemID}>
        <img src={images("./" + item.ItemID + ".jpg")} alt="" />

        <div className="d-flex justify-content-between pl-2 pr-2 blm-priceinfo">
          <div className="blm-orignalprice text-muted">
            <s>$ {item.OriginalPrice}</s>
          </div>
          <div className="blm-price">$ {item.Price}</div>
        </div>

        <div className="blm-caption">{item.Description}</div>
      </div>
    );
  }
}

export default GridItem;
