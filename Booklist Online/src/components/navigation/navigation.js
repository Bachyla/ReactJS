/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

import downarrow from '../../assets/images/downarrow.png'

import './navigation.css';

const Navigation = () => {
    return (
            <ul className="navigation">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/online-exclusive-reviews/">ONLINE EXCLUSIVE REVIEWS</Link>
                </li>
                <li>
                    <Link to="/book-awards/">BOOK AWARDS</Link>
                </li>
                <li>
                    <a href="https://www.booklistreader.com/">BOOKLIST READER</a>
                </li>
                <li>
                    <Link to="/newsletters/">NEWSLETTERS</Link>
                </li>
                <li>
                    <Link to="/webinars/">WEBINARS</Link>
                </li>
                <li className="pointer">
                    <a>
                        MY BOOKLIST
                        <img src={downarrow} width="10" height="8"/>
                    </a>
                    <ul className="submenu">
                        <li>
                            <Link to="/my-profile/">MY PROFILE</Link>
                        </li>
                        <li>
                            <Link to="/my-lists/">MY LISTS</Link>
                        </li>
                        <li>
                            <Link to="/my-alerts/">MY ALERTS</Link>
                        </li>
                    </ul>
                </li>
                <li className="pointer">
                    <a>
                        ABOUT US
                        <img src={downarrow} width="10" height="8"/>
                    </a>
                    <ul className="submenu">
                        <li>
                            <Link to="/faq/">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/help/">HELP</Link>
                        </li>
                        <li>
                            <Link to="/contact-us/">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/advertise/">ADVERTISE</Link>
                        </li>
                        <li>
                            <Link to="/get-reviewed/">GET REVIEWED</Link>
                        </li>
                        <li>
                            <Link to="/staff/">STAFF</Link>
                        </li>
                        <li>
                            <Link to="/reviewers/">REVIEWERS</Link>
                        </li>
                        <li>
                            <Link to="/write-for-us/">WRITE FOR US</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/subscribe-renew/">SUBSCRIBE/RENEW</Link>
                </li>
            </ul>
    );
};

export default Navigation;