import React from 'react';

import ShareButtons from '../../../share-buttons';

const ContactUs = () => {
    return (
        <div className="faq-wrapper">
            <ShareButtons />

            <h3 className="contact-us-title">CONTACT US</h3>
            <p className="faq-questions">General Inquiries</p>
            <p className="oer-span font-size-12">You can find answers to many common questions by following these links:</p>
            <a className="contact-us-link" href="/">How do I subscribe?</a>
            <a className="contact-us-link" href="/">Will you consider my book for review?</a>
            <a className="contact-us-link" href="/">Can I review for you?</a>
            <a className="contact-us-link" href="/">How do I advertise in Booklist and on Booklist Online?</a>
            <p className="oer-span font-size-12">If you don't find the answer you're looking for above, please consult our <a className="oer-span-a font-size-12" href="/">FAQ</a> before sending us an e-mail.</p>
            <br />
            <p className="oer-span font-size-12">General inquiries can be addressed to <a className="oer-span-a font-size-12" href="/">info@booklistonline.com</a>. Specific questions may be addressed to Booklist staff, whose e-mail addresses can be found on the <a className="oer-span-a font-size-12" href="/">staff page</a>.</p>

            <p className="faq-questions">Customer Service</p>
            <p className="oer-span font-size-12"><a className="oer-span-a font-size-12" href="/">Dan Kaplan</a>, Periodicals and Subscriptions Manager</p>

            <p className="faq-questions">BooklistAdvertising Personnel</p>
            <p className="oer-span font-size-12">Sales Representatives</p>

            <div className="representatives-wrapper">
                <a className="oer-span-a font-size-12" href="/">Linda Cohen</a>
                <p className="oer-span font-size-12">Sales Representative (New York and International)</p>
                <p className="oer-span font-size-12">(914) 944-0135</p>
            </div>
            
            <div className="representatives-wrapper">
                <a className="oer-span-a font-size-12" href="/">Nancy Wood</a>
                <p className="oer-span font-size-12">Sales Representative (East Coast and Canada)</p>
                <p className="oer-span font-size-12">(610) 285-2923</p>
            </div>

            <div className="representatives-wrapper">
                <a className="oer-span-a font-size-12" href="/">Ryan King</a>
                <p className="oer-span font-size-12">Sales Representative (Midwest and West)</p>
                <p className="oer-span font-size-12">(773) 414-9292</p>
            </div>         

            <div className="representatives-wrapper">
                <a className="oer-span-a font-size-12" href="/">Cynthia Harden </a>
                <p className="oer-span font-size-12">S50 E. Huron Street
                <br />
                Chicago, IL 60611</p>
                <p className="oer-span font-size-12">(312) 280-2421 p</p>
                <p className="oer-span font-size-12">(312) 280-5016 f</p>
            </div>  

            <p className="faq-questions">Mailing Address</p>
            <p className="oer-span font-size-12">American Library Association</p>
            <p className="oer-span font-size-12">Booklist</p>
            <p className="oer-span font-size-12">50 E. Huron St.</p>
            <p className="oer-span font-size-12">Chicago, IL 60611</p>
        </div>
    );
};

export default ContactUs;