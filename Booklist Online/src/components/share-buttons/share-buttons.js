import React from "react";

import "./share-buttons.css";

import FacebookIcon from "../../assets/images/social/facebook.svg";
import TwitterIcon from "../../assets/images/social/twitter.svg";
import PrinterIcon from "../../assets/images/social/print.svg";
import MailIcon from "../../assets/images/social/mail.svg";
import PinterestIcon from "../../assets/images/social/pinterest.svg";

const ShareButtons = () => {
  return (
    <div className="share-buttons-wrapper">
      <a href="/">
        <div className="icon-wrapper border-radius-0 facebook-color">
          <img src={FacebookIcon} alt="Facebook" width="22" height="22" />
        </div>
      </a>

      <a href="/">
        <div className="icon-wrapper border-radius-0 print-color">
          <img src={PrinterIcon} alt="Twitter" width="22" height="22" />
        </div>
      </a>

      <a href="/">
        <div className="icon-wrapper border-radius-0 twitter-color">
          <img src={TwitterIcon} alt="Twitter" width="22" height="22" />
        </div>
      </a>

      <a href="/">
        <div className="icon-wrapper border-radius-0 mail-color">
          <img src={MailIcon} alt="Mail" width="22" height="22" />
        </div>
      </a>

      <a href="/">
        <div className="icon-wrapper border-radius-0 pinterest-color">
          <img src={PinterestIcon} alt="Pinteresr" width="22" height="22" />
        </div>
      </a>
    </div>
  );
};

export default ShareButtons;
