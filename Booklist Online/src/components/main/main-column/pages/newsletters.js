import React from 'react';

import NewslettersImage from '../../../../assets/images/newsletters.jpg'
import FacebookIcon from '../../../../assets/images/social/facebook.svg';
import TwitterIcon from '../../../../assets/images/social/twitter.svg';
import PrinterIcon from '../../../../assets/images/social/print.svg';
import MailIcon from '../../../../assets/images/social/mail.svg';
import PinterestIcon from '../../../../assets/images/social/pinterest.svg';

const Newsletters = () => {
    return (
        <div className="book-awards-wrapper">
            <div className="share-btns">
                    <a href="/">
                        <div className="icon-wrapper border-radius-0 f-color">
                            <img alt="Facebook" src={FacebookIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 t-color">
                            <img alt="Twitter" src={TwitterIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 p-color">
                            <img alt="Twitter" src={PrinterIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 m-color">
                            <img alt="Mail" src={MailIcon}/>
                        </div>
                    </a>

                    <a href="/">
                        <div className="icon-wrapper border-radius-0 pint-color">
                            <img alt="Pinteresr" src={PinterestIcon}/>
                        </div>
                    </a>
                </div>

                <h3 className="oer-main-title margin-bottom-15">Booklist Online Newsletters</h3>
                <img alt="Newsletters" src={NewslettersImage}/>
                <p className="oer-span font-size-12">Fill out the form below to receive free newsletters and announcements from <em>Booklist,&nbsp;</em><em>Booklist Online,&nbsp;</em>and <em>The&nbsp;Booklist Reader</em>. (For longer descriptions, visit each newsletter's archive page.)&nbsp;</p>
                <br />
                <p className="oer-span font-size-12">To see past issues, browse our archives:&nbsp;
                <a className="oer-span-a font-size-12" href="/">Read&nbsp;Alert</a>,&nbsp;
                <a className="oer-span-a font-size-12" href="/">Booklist Online Exclusives</a>,&nbsp;
                <a className="oer-span-a font-size-12" href="/" title="Booklandia">Booklandia</a>,&nbsp;
                <a className="oer-span-a font-size-12" href="/">Quick Tips for Schools and Libraries</a>,&nbsp;
                <a className="oer-span-a font-size-12" href="/" title="All Things Audio">All Things Audio</a>,&nbsp;
                <a className="oer-span-a font-size-12" href="/" title="Corner Shelf newsletter archive">Corner Shelf</a>,&nbsp;
                <a className="oer-span-a font-size-12" href="/" title="Top Shelf Reference">Top Shelf Reference</a>, and&nbsp;
                <a className="oer-span-a font-size-12" href="/" title="Bookmakers">Bookmakers</a>&nbsp;</p>

        </div>
    );
};

export default Newsletters;