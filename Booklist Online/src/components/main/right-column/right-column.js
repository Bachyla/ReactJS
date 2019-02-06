/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import './right-column.css';

import facebookIcon from '../../../assets/images/social/facebook.svg';
import twitterIcon from '../../../assets/images/social/twitter.svg'
import pinterestIcon from '../../../assets/images/social/pinterest.svg'
import Border1 from '../../../assets/images/header-rl-border.gif';

const RightColumn = () => {
    return (
        <div className="right-column">
        <img src={Border1} className="left-border"/>
            <div className="social-links">
			    FOLLOW BOOKLIST!
                <div className="flex">
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img src={facebookIcon}/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img src={twitterIcon}/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img src={pinterestIcon}/>
                        </div>
                    </a>     
                </div>
            </div>
        </div>
    );
};

export default RightColumn;