import React, { Component } from 'react';

import './main-column.css';

import HomePage from './pages/home-page';
import OnlineExclusiveReviews from './pages/online-exclusive-reviews';
import BookAwards from './pages/book-awards';
import Newsletters from './pages/newsletters';
import Webinars from './pages/webinars';
import Faq from './pages/faq';
import Help from './pages/help';
import ContactUs from './pages/contact-us';
import SearchReviews from './pages/search-reviews';
import SearchFeatures from './pages/search-features';
import SavedSearches from './pages/saved-searches';
import SearchResults from './pages/search-results';

import { Switch, Route } from 'react-router-dom';


export default class MainColumn extends Component {
    render() {
        return (
            <section className="main-column">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/online-exclusive-reviews" exact component={OnlineExclusiveReviews} />
                    <Route path="/book-awards" exact component={BookAwards} />
                    <Route path="/newsletters" exact component={Newsletters} />
                    <Route path="/webinars" exact component={Webinars} />
                    <Route path="/faq" exact component={Faq} />
                    <Route path="/help" exact component={Help} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Route path="/search-reviews" exact component={SearchReviews} />
                    <Route path="/search-features" exact component={SearchFeatures} />
                    <Route path="/saved-searches" exact component={SavedSearches} />
                    <Route path="/search-results" exact component={SearchResults} />
                </Switch>
            </section>
        );
    };
};