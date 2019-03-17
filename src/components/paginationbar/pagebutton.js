import React from "react";

const PageButton = props => {
  const {
    id,
    buttonPageNo,
    buttonText,
    buttonActive,
    buttonDisabled,
    onPageButtonClick
  } = props;

  let className = "page-item ";
  className += buttonActive ? "active" : "";
  className += buttonDisabled ? "disabled" : "";

  return (
    <li key={id} className={className}>
      <a
        className="page-link"
        href={buttonPageNo}
        onClick={e => {
          e.preventDefault();
          onPageButtonClick(buttonPageNo);
        }}
      >
        <span>{buttonText}</span>
      </a>
    </li>
  );
};

export default PageButton;
