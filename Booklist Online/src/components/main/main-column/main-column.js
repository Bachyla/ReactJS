/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import './main-column.css';
import Border1 from '../../../assets/images/header-rl-border.gif';


import HomePage from './pages/home-page';
import OnlineExclusiveReviews from './pages/online-exclusive-reviews';
import BookAwards from './pages/book-awards';
import Newsletters from './pages/newsletters';
import Webinars from './pages/webinars';

import { Switch, Route } from 'react-router-dom';


export default class MainColumn extends Component {
    render() {
        return (
            <div className="main-column">
                <img src={Border1} className="left-border"/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/online-exclusive-reviews" exact component={OnlineExclusiveReviews} />
                    <Route path="/book-awards" exact component={BookAwards} />
                    <Route path="/newsletters" exact component={Newsletters} />
                    <Route path="/webinars" exact component={Webinars} />
                </Switch>
            </div>
        );
    };
};