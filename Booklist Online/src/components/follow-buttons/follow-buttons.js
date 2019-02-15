import React from 'react';

import './follow-buttons.css';

import FacebookIcon from '../../assets/images/social/facebook.svg';
import TwitterIcon from '../../assets/images/social/twitter.svg';
import PinterestIcon from '../../assets/images/social/pinterest.svg';

const FollowButtons = () => {
    return (
            <div className="social-links">
			    FOLLOW BOOKLIST!
                <div className="inline-flex">
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img alt="Facebook" src={FacebookIcon}/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img alt="Twitter" src={TwitterIcon}/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img alt="Pinterest" src={PinterestIcon}/>
                        </div>
                    </a>     
                </div>
            </div>
    );
};

export default FollowButtons;

