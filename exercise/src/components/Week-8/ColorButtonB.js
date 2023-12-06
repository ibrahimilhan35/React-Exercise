import React from "react";
import withColor from "./withColor";

const ColorButtonB = ({ backgroundColor, buttonName, onButtonClick }) => (
  <button
    style={{ backgroundColor, color: "gray", padding: "10px", cursor: "pointer" }}
    onClick={onButtonClick}
  >
    {buttonName}
  </button>
);

export default withColor(ColorButtonB);
