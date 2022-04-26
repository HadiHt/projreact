import React, { createRef } from "react";
import "./Navbar.css";
import { Search, MenuSharp } from "@material-ui/icons";
import { useState } from "react";

function Navbar() {
  const [hideState, setHideState] = useState(false);
  const inputRef = createRef();

  let navClass = hideState ? "navCollapse" : "navCollapseHidden";

  const changeVisibility = () => {
    setHideState(!hideState);
  };

  const changeFocus = () => {
    const ref = inputRef.current;
    ref.focus();
  };

  //const sendResult = () => {
  // const searchResult = inputRef.current.value;
  //const response = await fetch("https://api.npms.io/v2/search?q=react");
  //const data = await response.json();
  // };

  return (
    <div className="Navbar">
      <div className="bar">
        <div className="Search">
          <Search className="SearchIcon" />
          <input
            placeholder="Search..."
            className="searchInput"
            ref={inputRef}
          />
          <div className="StartSearch" onClick={sendResult}></div>
        </div>

        <div className="buttonDiv">
          <MenuSharp className="navButton" onClick={changeVisibility} />
        </div>
      </div>
      <div className={navClass}>
        <div className="Menu">
          <div className="menuBut">Home</div>
          <div className="menuBut">Profile</div>
          <div className="menuBut">About</div>
          <div className="menuBut">Settings</div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
