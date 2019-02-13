import React from 'react';

import './share-buttons.css';

import FacebookIcon from '../../assets/images/social/facebook.svg';
import TwitterIcon from '../../assets/images/social/twitter.svg';
import PrinterIcon from '../../assets/images/social/print.svg';
import MailIcon from '../../assets/images/social/mail.svg';
import PinterestIcon from '../../assets/images/social/pinterest.svg';

const ShareButtons = () => {
    return (
            <div className="share-btns">
                    <a href="/">
                        <div className="icon-wrapper border-radius-0 f-color">
                            <img alt="Facebook" src={FacebookIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 t-color">
                            <img alt="Twitter" src={TwitterIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 p-color">
                            <img alt="Twitter" src={PrinterIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 m-color">
                            <img alt="Mail" src={MailIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 pint-color">
                            <img alt="Pinteresr" src={PinterestIcon}/>
                        </div>
                    </a>
            </div>
    );
};

export default ShareButtons;