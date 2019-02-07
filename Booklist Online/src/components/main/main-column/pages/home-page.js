import React, { Fragment } from 'react';

import ROTDTitle from '../../../../assets/images/home/review-of-the-day-title.gif';
import ROTDBookImage from '../../../../assets/images/home/rotd-book-image.jpg';

import LATitle from '../../../../assets/images/home/latest-articles-title.gif';
import LAImage1 from '../../../../assets/images/home/writers-readers-Kim_f1.jpg';
import LAImage2 from '../../../../assets/images/home/writers-readers-Sam_f1.jpg';
import LAImage3 from '../../../../assets/images/home/writers-readers-Liz_f1.jpg';
import LAImage4 from '../../../../assets/images/home/writers-readers-Illuminati_f1.jpg';
import LAImage5 from '../../../../assets/images/home/top-10-diverse.jpg';
import LAImage6 from '../../../../assets/images/home/top-10-diverse-fiction.jpg';

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
                        <span className="read-more-link"><a href="/">>>Read More</a></span>
                    </div>

                    <div className="rotd-container">
                        <img className="rotd-image-title" src={LATitle} alt="Latest Articles"/>

                        <img className="la-image-writter" src={LAImage1} alt="Writter Kim"/>
                            <p className="rotd-p"><a className="rotd-title-link font-size-12" href="/">Writers & Readers: Breaking Boundaries</a><br />by Crystal Hana Kims</p>
                            <p className="rotd-p margin-top-5">&#8203;In 2015, while writing my first novel, I was also teaching academic-essay writing to socioeconomically disadvantaged high-school students, many of whom were hoping to be the first in their family to go to college. While guiding my students through the college-application process, what I noticed most was their pervasive fear that despite their stellar grades, accomplishments, and all the obstacles they had overcome, they didn’t belong in higher education.</p>
                        <span className="read-more-link"><a href="/">>>Read More</a></span>

                        <img className="la-image-writter" src={LAImage2} alt="Writter Kosoko"/>
                            <p className="rotd-p"><a className="rotd-title-link font-size-12" href="/">Talking With: Kosoko Jackson</a><br />by Rob Bittner</p>
                            <p className="rotd-p margin-top-5">&#8203;Kosoko Jackson discusses the importance of intersectional diversity in his debut novel, <em><a className="rotd-link" href="/">A Place for Wolves​.</a></em></p>
                        <span className="read-more-link"><a href="/">>>Read More</a></span>

                        <img className="la-image-writter" src={LAImage3} alt="Writter Soneela"/>
                            <p className="rotd-p"><a className="rotd-title-link font-size-12" href="/">Now Hear This: Soneela Nankani</a><br />​by Terry Hong</p>
                            <p className="rotd-p margin-top-5">&#8203;She can sound like a frightened little girl on the run or a gruff old man who’s seen it all. She can talk financial crises, offer self-help guidance, embody fantasy worlds, and channel her inner Gisele Bündchen. She narrates in multiple tongues, donning accents and languages with ease as she guides headphoned listeners across borders and cultures.</p>
                        <span className="read-more-link"><a href="/">>>Read More</a></span>

                        <img className="la-image-writter" src={LAImage4} alt="Illuminati"/>
                            <p className="rotd-p"><a className="rotd-title-link font-size-12" href="/">Read-alikes: Tales from the Border</a><br />​by Donna Seaman</p>
                            <p className="rotd-p margin-top-5">&#8203;The revelatory and affecting memoirs, histories, and novels below astutely examine the factual, emotional, familial, social, political, racial, and ethical dimensions of the complex borderland and immigration issues that propel Aaron Bobrow-Strain’s <em><a className="rotd-link" href="/">The Death and Life of Aida Hernandez.</a></em></p>
                        <span className="read-more-link"><a href="/">>>Read More</a></span>

                        <img className="la-image-writter" src={LAImage5} alt="Top 10 Diverse"/>
                            <p className="rotd-p"><a className="rotd-title-link font-size-12" href="/">Top 10 Diverse Nonfiction for Youth: 2019</a><br />​by Ilene Cooper</p>
                            <p className="rotd-p margin-top-5">&#8203;These outstanding books, which examine individual lives and American history, showcase a diverse range of perspectives and backgrounds. They were reviewed in Booklist between February 1, 2018, and January 2019.</p>
                        <span className="read-more-link"><a href="/">>>Read More</a></span>

                        <img className="la-image-writter" src={LAImage6} alt="Top 10 Diverse"/>
                            <p className="rotd-p"><a className="rotd-title-link font-size-12" href="/">Top 10 Diverse Fiction for Youth: 2019</a><br />​by Ilene Cooper</p>
                            <p className="rotd-p margin-top-5">&#8203;These books, reviewed between February 1, 2018, and January 2019, cover a wide age range and introduce a diverse variety of voices. </p>
                        <span className="read-more-link"><a href="/">>>Read More</a></span>
                        
                    </div>
                </div>
                <div className="home-right-column"></div>
            </div>
        </Fragment>
    );
};

export default HomePage;