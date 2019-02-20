import React from 'react';

import './main.css';
import Border2 from '../../assets/images/header-tb-border.gif';

import LeftColumn from './left-column';
import MainColumn from './main-column';
import RightColumn from './right-column';

const Main = () => {
    return (
        <div className="main-container">
            <img src={Border2} className="top-border" alt=""/>
            <div className="flex">
                <LeftColumn />
                <MainColumn />
                <RightColumn />
            </div>
            <img src={Border2} className="top-border" alt=""/>
        </div>
    )
}

export default Main;