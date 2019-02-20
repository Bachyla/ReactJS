import React from 'react';

import './footer.css';
import border2 from '../../assets/images/header-tb-border.gif';

const Footer = () => {
    return (
        <div className="footer">
            <img src={border2} alt="" className="top-border"/>
            <div className="shell">
                <p>Booklist Online: Book Review from the American Library Association</p>
                <a href="http://www.ala.org/privacypolicy">Privacy Policy</a>
                <p>© 2019 Booklist Publications</p>
            </div>
        </div> 
    );
};

export default Footer;