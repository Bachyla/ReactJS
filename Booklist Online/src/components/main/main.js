/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import './main.css';
import Border1 from '../../assets/images/header-rl-border.gif';
import Border2 from '../../assets/images/header-tb-border.gif';

import LeftColumn from './left-column';
import MainColumn from './main-column';
import RightColumn from './right-column';

const Main = () => {
    return (
        <div className="main-container">
            <img src={Border2} className="top-border"/>
            <img src={Border1} className="left-border"/>
            <img src={Border1} className="right-border"/>
            <div className="flex">
                    <LeftColumn />
                    <MainColumn />
                    <RightColumn />
            </div>
            <img src={Border2} className="top-border"/>
        </div>
    )
}

Main.propTypes = {
    left: PropTypes.node,
    middle: PropTypes.node,
    right: PropTypes.node,
}

export default Main;