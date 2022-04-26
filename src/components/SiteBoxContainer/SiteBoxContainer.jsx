import React from "react";
import "./SiteBoxContainer.css";
import SiteBox from "../SiteBox/SiteBox";

function SiteBoxContainer() {
  return (
    <div className="outerBox">
      <SiteBox />
      <SiteBox />
      <SiteBox />
      <SiteBox />
      <SiteBox />
      <SiteBox />
      <SiteBox />
    </div>
  );
}

export default SiteBoxContainer;
