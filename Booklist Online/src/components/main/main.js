/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

import './main.css';
import border1 from '../../assets/images/header-rl-border.gif';
import border2 from '../../assets/images/header-tb-border.gif';

import RightColumn from './right-column'

const Main = ({ left, middle }) => {
    return (
        <div className="main-container">
            <img src={border2} className="top-border"/>
            <img src={border1} className="left-border"/>
            <img src={border1} className="right-border"/>
            <div className="flex">
                <div>
                    {left}
                </div>
                <div>
                    {middle}
                </div>
                <div className="right-column">
                    <RightColumn />
                </div>
            </div>
            <img src={border2} className="top-border"/>
        </div>
    )
}

Main.propTypes = {
    left: PropTypes.node,
    middle: PropTypes.node,
    right: PropTypes.node,
}

export default Main;