import React from 'react';

import ShareButtons from '../../../share-buttons';

const Faq = () => {
    return (
        <div className="faq-wrapper">
            <ShareButtons />

            <p className="faq-questions">Frequently Asked Questions (FAQ)</p>
            <a 
                className="faq-link" href="/" 
                target="_blank"><span><u>ABOUT BOOKLIST PUBLICATIONS</u></span></a>
            <a 
                className="faq-link" href="/" 
                target="_blank"><span><u>REVIEWING, GETTING REVIEWED, AND ADVERTISING ON BOOKLIST</u></span></a>
            <a 
                className="faq-link" href="/" 
                target="_blank"><span><u>SUBSCRIBING TO BOOKLIST</u></span></a>
            <a 
                className="faq-link" href="/" 
                target="_blank"><span><u>SETTING UP ACCESS TO BOOKLIST ONLINE</u></span></a>
            <a 
                className="faq-link" href="/" 
                target="_blank"><span><u>USING BOOKLIST ONLINE: SEARCHING, BROWSING, AND REVIEWING RESULTS</u></span></a>
            <a 
                className="faq-link" href="/" 
                target="_blank"><span><u>SYNDICATION & LEGAL ISSUES</u></span></a>

            <p className="oer-span font-size-12">If you have a question not covered here, please email Booklist Online at <a className="faq-link" href="/">info@booklistonline.com.</a></p>

            <p className="faq-questions">ABOUT BOOKLIST PUBLICATIONS</p>

            <p className="faq-questions">Q: What is Booklist?</p>
            <p className="oer-span font-size-12">A: <em>Booklist</em> is a book-review magazine that has been published by the American Library Association for more than 100 years, and is widely viewed as offering the most reliable reviews to help libraries decide what to buy and to help library patrons and students decide what to read, view, or listen to. It comprises two print magazines, an extensive website and database, e-newsletters, webinars, and other resources that support librarians in collection development and readers' advisory.</p>

            <p className="faq-questions">Q: What is Booklist Online?</p>
            <p className="oer-span font-size-12">A: <em>Booklist Online</em> is the web version of the <em>Booklist</em> print magazine. It offers free content to non-subscribers including a Review of the Day (a highlighted review we're featuring), and a generous selection of additional reviews and features written exclusively for <em>Booklist Online</em>. Subscribers also gain access to <a className="oer-span-a font-size-12" href="/" title="Booklist digital editions">digital editions</a> of <em>Booklist</em> and the full&nbsp;<em>Booklist Online&nbsp;</em>database, which contains more than 180,000 reviews and thousands of features dating back to 1992 and 8,000 new reviews and related features every year. Much of that content dynamically linked—review to review, review to feature, and feature to feature.</p>

            <p className="faq-questions">Q: What is Book Links?</p>
            <p className="oer-span font-size-12">A: A quarterly supplement to <em>Booklist </em>free to <em>Booklist</em> subscribers, <em>Book Links</em> magazine helps teachers, youth librarians, school library media specialists, reading specialists, curriculum coordinators, and others connect children with high-quality literature-based resources.</p> 
            <p className="oer-span font-size-12"><em>Book Links </em>articles provide comprehensive information on using books in the classroom, including thematic bibliographies with related discussion questions and activities, author and illustrator interviews and essays, and articles by educators on practical ways to turn children onto reading. Published in September, November, January, and April, each <em>Book Links</em> issue focuses on a core curriculum area, including social studies, multicultural literature, language arts, and science.&nbsp;<em>Book Links</em> articles, from October 2009 onward, are available to <em>Booklist </em>subscribers on <em>Booklist Online</em>.</p>
        </div>
    );
};

export default Faq;

