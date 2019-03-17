import React, { Component } from "react";
import "./griditem.css";

class GridItem extends Component {
  render() {
    const { item } = this.props;
    {/* define image context */}
    const images = require.context("../../images/bouquet", true);
    
    return (
      <div className="blm-griditem" key={item.ItemID} id={item.ItemID}>
       {/* Display image */}
        <img src={images("./" + item.ItemID + ".jpg")} alt="" />
        
        {/* Display original price in muted and striketrhough */}
        <div className="d-flex justify-content-between pl-2 pr-2 blm-priceinfo">
          <div className="blm-orignalprice text-muted">
            <s>$ {item.OriginalPrice}</s>
          </div>
          {/* Display price */}
          <div className="blm-price">$ {item.Price}</div>
        </div>

        {/* Display description */}
        <div className="blm-caption">{item.Description}</div>
      </div>
    );
  }
}

export default GridItem;
