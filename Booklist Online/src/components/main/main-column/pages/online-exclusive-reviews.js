import React, { Fragment } from 'react';

import HeaderImage from '../../../../assets/images/book reviews/header.png'

const OnlineExclusiveReviews = () => {
    return (
        <Fragment>
            <h3 className="oer-main-title">Read <i>Booklist Online Exclusive</i> Reviews</h3>
            <img className="oer-main-image" src={HeaderImage} alt="Header"/>
            <span className="oer-span">Each year, <i>Booklist</i> publishes more than 2,000 <i>Booklist Online Exclusive</i> reviews, which we offer free to subscribers and nonsubscribers alike. Follow the links below to find web-only reviews published during the last 30 days. To have a monthly, hand-picked selection of BOLE reviews delivered to your inbox, <a className="oer-span-a" href="/newsletters">click here to sign up for our free <i>Booklist Online Exclusives</i> newsletter</a>. It’s like an extra issue of <i>Booklist</i>!</span>

            <h3 className="oer-main-title font-size-13">Find Reviews</h3>
            <ul className="oer-list">
                <li><a className="oer-span-a" href="/">Adult Nonfiction</a></li>
                <li><a className="oer-span-a" href="/">Adult Fiction</a></li>
                <li><a className="oer-span-a" href="/">Youth Nonfiction</a></li>
                <li><a className="oer-span-a" href="/">Youth Fiction</a></li>
                <li><a className="oer-span-a" href="/">Adult Audio & Video</a></li>
                <li><a className="oer-span-a" href="/">Youth Audio & Video</a></li>
            </ul>

            <h3 className="oer-main-title font-size-13">Find More Reviews</h3>
            <span className="oer-span">To find even more titles in our growing database of 15,000 online exclusives, log in at the upper right or <a className="oer-span-a" href="/">register your print account</a> to use our powerful <a className="oer-span-a" href="/">Advanced Search</a>. (Limit your search by selecting “Online-Only Reviews.”) <i>Booklist</i> subscribers gain full access to our archive of nearly 200,000 reviews.</span>
            <span className="oer-span padding-top-15">Want to subscribe? <a className="oer-span-a" href="/">Click here</a> to learn more! Or <a className="oer-span-a" href="/">register</a> for a 14-day FREE trial today! </span>

            <h3 className="oer-main-title font-size-13">What Are <i>Booklist Online Exclusive</i> Reviews?</h3>
            <span className="oer-span"><i>Booklist Online Exclusive</i> reviews complement <i>Booklist</i>'s already extensive print coverage, allowing us both to review some subject areas in greater depth and to weigh in more quickly on titles not released for review in advance of publication. Occasionally, we write new reviews of older books, too, to offer fresh perspective on a familiar work. These titles are recommended, with qualifications as noted, for purchase by public and school libraries; for further information, please consult the <i>Booklist</i> selection policy.</span>
        </Fragment>
    );
};

export default OnlineExclusiveReviews;