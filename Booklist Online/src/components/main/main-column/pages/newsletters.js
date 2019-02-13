/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

import NewslettersImage from '../../../../assets/images/newsletters.jpg'
import ShareButtons from '../../../share-buttons';

export default class Newsletters extends Component {
    render() {
        return (
            <div className="book-awards-wrapper">

                <ShareButtons />

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

                <div className="newsletter-form">
                    <h4 className="newsletter-form-title">Select the newsletters and announcements you'd like to receive:</h4>
                    <form>
                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Read Alert" />
                                Read Alert (editor's picks from the new Booklist)
                        </label>
                        
                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Booklist Reader Daily Update"  />
                                Booklist Reader Daily Update (the latest posts from our blog)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Booklist Online Exclusives"  />
                                Booklist Online Exclusives (a free issue of Booklist!)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Booklandia" />
                                Booklandia (middle-grade and YA lit)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                Quick Tips (for K-12 educators & school librarians)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                All Things Audio (audio reviews & more!)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                Corner Shelf (where Readers' Advisory meets Collection Development)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                Top Shelf Reference (practical, real-world reference)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                Bookmakers (publishing's story behind the story)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                Webinars & announcements (free Booklist webinars!)
                        </label>

                        <label className="newsletter-label">
                        <input  
                                className="newsletter-input"
                                type="checkbox" 
                                name="Quick Tips" />
                                Booklist Delivers (promotions & deals from our partners)
                        </label>

                            <input 
                                title="Email"
                                placeholder="Email"
                                className="ns-email-input input-border" />

                        <div className="name-form">
                            <input 
                                    title="First Name"
                                    placeholder="First Name"
                                    className="ns-fn-input input-border" />

                            <input 
                                    title="Last Name"
                                    placeholder="Last Name"
                                    className="ns-fn-input ns-ls-input input-border" />
                        </div>

                        <div className="select-wrapper input-border">
                            <select className="dropdown-element">
                                <option value="no" hidden={true}>Library Type</option>
                                <option value="A">School</option>
                                <option value="B">Public</option>
                                <option value="C">Academic</option>
                                <option value="D">State/Gov/Other</option>
                                <option value="E">Retired Librarian</option>
                                <option value="F">Publisher/verdon</option>
                                <option value="G">Bookstore</option>
                            </select>
                        </div>

                        <div className="name-form">
                            <input 
                                    title="Zip"
                                    placeholder="Zip"
                                    className="ns-fn-input ns-ls-input input-border" />
                            <div className="whitespace"></div>
                        </div>

                        <button 
                            className="submit-btn"> Submit
                        </button>

                        <span className="pers-data-title">Personal Data Notification</span>
                        <p className="pers-data-text">Booklist, an American Library Association publication, uses this webform in order to fulfill your newsletter and announcement preferences. Your personal data is stored and used to fulfill your requests for services from Booklist. Booklist will occasionally convey news to you on behalf of ourselves or our sponsors based on this data. You can choose to block these messages by adjusting your <a href="https://ala-publishing.informz.net/ala-publishing/pages/booklist_comm" className="pers-data-link" target="_blank">communications preferences</a>. Your e-mail may be shared with sponsors of a newsletter should you express interest in their products or content related to those products. If the sponsors choose to communicate with you by e-mail, they are obligated to provide you with an opportunity to opt-out from future e-mails in compliance with applicable laws. For more information, review <a href="http://www.ala.org/privacypolicy" className="pers-data-link" target="_blank">ALA’s Privacy Policy</a>.</p>
                    </form>
                </div>
            </div>
        );
    };
};