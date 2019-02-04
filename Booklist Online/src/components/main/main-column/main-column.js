/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react';

import './main-column.css';
import Border1 from '../../../assets/images/header-rl-border.gif';


export default class MainColumn extends Component {
    render() {
        return (
        <Fragment>
            <div className="main-column">
                <img src={Border1} className="left-border"/>
                <img src={Border1} className="right-border"/>
            </div>
        </Fragment>  
        );
    };
};