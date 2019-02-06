import React, { Fragment } from 'react';

import ROTDTitle from '../../../../assets/images/home/review-of-the-day-title.gif';
import ROTDBookImage from '../../../../assets/images/home/rotd-book-image.jpg';

const HomePage = () => {
    return (
        <Fragment>
            <div className="home-container">
                <div className="home-left-column">
                    <div className="rotd-container">
                        <img className="rotd-image-title" src={ROTDTitle} alt="Review of the day"/>
                        <img className="rotd-image-book" src={ROTDBookImage} alt="Book of the review"/>
                        <p className="rotd-p"><a className="rotd-title-link" href="/">The Other Americans</a><br />by Laila Lalami</p>
                        <p className="rotd-p margin-top-5">&#8203;Who killed Driss Guerraoui? Was it an accident, a hit-and-run in the wee hours of the morning? Or was it murder, a brutal act against the Moroccan immigrant who might pose a threat to a neighborhood business in a small Mojave-desert town? The mystery at the center of Lalami’s (<em><a className="rotd-link" href="/">The Moor’s Account</a></em>, 2014) novel brings together an intriguing set of characters, including Driss’ daughter, Nora, a struggling composer who returns home to the remnants of her family.</p>
                    </div>
                </div>
                <div className="home-right-column"></div>
            </div>
        </Fragment>
    );
};

export default HomePage;