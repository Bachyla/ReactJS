import React, { Fragment } from 'react';

import ShareButtons from '../../../share-buttons/';

import Webinar1 from '../../../../assets/images/webinars/webinar1.jpg';
import Webinar2 from '../../../../assets/images/webinars/webinar2.jpg';
import Webinar3 from '../../../../assets/images/webinars/webinar3.jpg';
import Webinar4 from '../../../../assets/images/webinars/webinar4.jpg';
import Webinar5 from '../../../../assets/images/webinars/webinar5.jpg';
import Webinar6 from '../../../../assets/images/webinars/webinar6.jpg'; 

const Webinars = () => {
    return (
        <Fragment>
            <div className="book-awards-wrapper">
                <ShareButtons />
                <img className="webinars-main-image" src={Webinar1} alt="Booklist Webinars"></img>
                <p className="oer-span font-size-12 margin-bottom-15"><em>Booklist</em> webinars are free, one-hour sessions geared towards exploring forthcoming titles from the publishing industry and trends in librarianship.</p>
                <p className="oer-span font-size-12 margin-bottom-15">See our upcoming events below and check back often for updates.&nbsp;</p>
                <p className="oer-span font-size-12">To view&nbsp;recordings of past <em>Booklist</em> webinars, visit&nbsp;our <a className="oer-span-a font-size-12" href="/" title="Booklist webinar archive"> webinars archive. </a></p>
                <p className="oer-span font-size-12">And check here for a list of our <a className="oer-span-a font-size-12" href="/" target="_blank" title="Booklist's Live Events">live events</a>!&nbsp;</p>
            </div>

            <div className="offers">
                <img className="webinar-img" src={Webinar2} alt="Booklist Webinars"></img>
                <a href="/" target="_blank">
                    <span className="offers-link"><u>Register Now!</u></span>
                </a>
                <p className="oer-span font-size-12 webinar-text"><em>Webinar registrants will receive emails from Booklist containing follow-up materials and may receive other follow-up e-mails from sponsors.</em></p>

                <img className="webinar-img" src={Webinar3} alt="Booklist Webinars"></img>
                <a href="/" target="_blank">
                    <span className="offers-link"><u>Register Now!</u></span>
                </a>
                <p className="oer-span font-size-12 webinar-text"><em>Webinar registrants will receive emails from Booklist containing follow-up materials and may receive other follow-up e-mails from sponsors.</em></p>

                <img className="webinar-img" src={Webinar4} alt="Booklist Webinars"></img>
                <a href="/" target="_blank">
                    <span className="offers-link"><u>Register Now!</u></span>
                </a>
                <p className="oer-span font-size-12 webinar-text"><em>Webinar registrants will receive emails from Booklist containing follow-up materials and may receive other follow-up e-mails from sponsors.</em></p>

                <img className="webinar-img" src={Webinar5} alt="Booklist Webinars"></img>
                <a href="/" target="_blank">
                    <span className="offers-link"><u>Register Now!</u></span>
                </a>
                <p className="oer-span font-size-12 webinar-text"><em>Webinar registrants will receive emails from Booklist containing follow-up materials and may receive other follow-up e-mails from sponsors.</em></p>

                <img className="webinar-img" src={Webinar6} alt="Booklist Webinars"></img>
                <a href="/" target="_blank">
                    <span className="offers-link"><u>Register Now!</u></span>
                </a>
                <p className="oer-span font-size-12 webinar-text"><em>Webinar registrants will receive emails from Booklist containing follow-up materials and may receive other follow-up e-mails from sponsors.</em></p>
            </div>
        </Fragment>
    );
};

export default Webinars;