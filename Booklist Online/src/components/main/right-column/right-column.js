/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import './right-column.css';

import FacebookIcon from '../../../assets/images/social/facebook.svg';
import TwitterIcon from '../../../assets/images/social/twitter.svg';
import PinterestIcon from '../../../assets/images/social/pinterest.svg';
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
                            <img src={FacebookIcon}/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img src={TwitterIcon}/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/ALA.Booklist">
                        <div className="icon-wrapper">
                            <img src={PinterestIcon}/>
                        </div>
                    </a>     
                </div>
            </div>
        </div>
    );
};

export default RightColumn;