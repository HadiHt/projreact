import React from "react";
import "./ProfileComp.css";
import SiteBoxContainer from "../../components/SiteBoxContainer/SiteBoxContainer";

const ProfileComp = () => {
  return (
    <div className="profileContainer">
      <div className="imageContainer">
        <div className="image">
          <img src="./The_rock.jpg" alt="THE ROCK" />
        </div>
      </div>
      <span className="aboutContainer">
        <ul className="unorderedList">
          <li>Phone</li>
          <li>Address</li>
          <li>E-mail</li>
          <li>site</li>
        </ul>
      </span>
      <h1 className="title">Saved Websites</h1>
      <div className="savedSitesContainer">
        <SiteBoxContainer></SiteBoxContainer>
      </div>
    </div>
  );
};

export default ProfileComp;
