/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';

import './right-column.css';

import facebookIcon from '../../../assets/images/social/facebook.svg';
import twitterIcon from '../../../assets/images/social/twitter.svg'
import pinterestIcon from '../../../assets/images/social/pinterest.svg'

const RightColumn = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default RightColumn;