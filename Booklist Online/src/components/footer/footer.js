/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import './footer.css';
import border1 from '../../assets/images/header-rl-border.gif';
import border2 from '../../assets/images/header-tb-border.gif';

const Footer = () => {
    return (
        <div className="footer">
            <img src={border2} className="top-border"/>
            <img src={border1} className="left-border"/>
            <img src={border1} className="right-border"/>
            <div className="shell">
                <p>Booklist Online: Book Review from the American Library Association</p>
                <a>Privacy Policy</a>
                <p>© 2019 Booklist Publications</p>
            </div>
        </div> 
    );
};

export default Footer;