import React, { Component } from "react";
import PageButton from "./pagebutton";

class PaginationBar extends Component {
  pageButtonCountInfo = { xs: 5, sm: 5, md: 10, lg: 10, xl: 10 };

  getPageButtonInfo = () => {
    const { screenSizeMode, paginationInfo } = this.props;

    const { PageNo, TotalCount, PageSize } = paginationInfo;

    let buttonCount = this.pageButtonCountInfo[screenSizeMode];

    let totalPageCount = Math.ceil(TotalCount / PageSize);

    let startPage = Math.max(PageNo - Math.round(buttonCount / 2), 0);

    startPage += Math.min(totalPageCount - (startPage + buttonCount), 0) + 1;

    let endPage = startPage + buttonCount - 1;

    return { totalPageCount, startPage, endPage, pageNo: PageNo };
  };

  createPageButons = (startPage, endPage, pageNo, totalPageCount) => {
    const { onPageButtonClick } = this.props;

    let buttonArray = [];

    /* Previous Page Button */
    buttonArray.push(
      <PageButton
        key="previous"
        id="previous"
        buttonPageNo={Math.max(pageNo - 1, 1)}
        buttonText="&laquo;"
        buttonActive={false}
        buttonDisabled={pageNo <= 1}
        onPageButtonClick={onPageButtonClick}
      />
    );

    /* Page No. Button */
    for (let i = startPage; i <= endPage; i++) {
      buttonArray.push(
        <PageButton
          key={i}
          id={i}
          buttonPageNo={i}
          buttonText={i}
          buttonActive={i === pageNo}
          buttonDisabled={false}
          onPageButtonClick={onPageButtonClick}
        />
      );
    }

    /* Next Page Button */
    buttonArray.push(
      <PageButton
        key="next"
        id="next"
        buttonPageNo={Math.min(pageNo + 1, totalPageCount)}
        buttonText="&raquo;"
        buttonActive={false}
        buttonDisabled={pageNo >= totalPageCount}
        onPageButtonClick={onPageButtonClick}
      />
    );

    return buttonArray;
  };

  render() {
    const {
      startPage,
      endPage,
      pageNo,
      totalPageCount
    } = this.getPageButtonInfo();

    return (
      <nav className="mt-5 mb-5">
        <ul className="pagination pagination-md justify-content-center">
          {this.createPageButons(startPage, endPage, pageNo, totalPageCount)}
        </ul>
      </nav>
    );
  }
}

export default PaginationBar;
