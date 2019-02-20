/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import FormLogin from './form-login';

import './header.css';
import icon from '../../assets/images/logo.gif';
import border1 from '../../assets/images/header-rl-border.gif';
import border2 from '../../assets/images/header-tb-border.gif';

const Header = () => {
    return (
        <div className="header">
            <img src={border2} className="top-border"/>
            <img src={icon} className="logo" alt="Logo icon" width="275" height="90"/>
            <img src={border1} className="left-border"/>
            <img src={border1} className="right-border"/>  
            <FormLogin />
            <h1 className="title">Booklist Online: More than 200,000 book reviews for librarians, book groups, and book lovers—from the trusted experts at the American Library Association</h1>
            <img src={border2} className="top-border"/>
        </div>
    );
};

export default Header;