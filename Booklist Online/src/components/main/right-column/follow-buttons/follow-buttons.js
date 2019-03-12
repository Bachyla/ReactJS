import React from "react";

import "./follow-buttons.css";

import FacebookIcon from "../../../../assets/images/social/facebook.svg";
import TwitterIcon from "../../../../assets/images/social/twitter.svg";
import PinterestIcon from "../../../../assets/images/social/pinterest.svg";

const FollowButtons = () => {
  return (
    <div className="social-links">
      FOLLOW BOOKLIST!
      <div className="inline-flex">
        <a href="https://www.facebook.com/ALA.Booklist">
          <div className="icon-wrapper">
            <img src={FacebookIcon} alt="Facebook" width="22" height="22" />
          </div>
        </a>
        <a href="https://www.facebook.com/ALA.Booklist">
          <div className="icon-wrapper">
            <img src={TwitterIcon} alt="Twitter" width="22" height="22" />
          </div>
        </a>
        <a href="https://www.facebook.com/ALA.Booklist">
          <div className="icon-wrapper">
            <img src={PinterestIcon} alt="Pinterest" width="22" height="22" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FollowButtons;
