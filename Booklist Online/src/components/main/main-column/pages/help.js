import React from 'react';

const Help = () => {
    return (
        <div className="book-awards-wrapper">
            <h3 className="oer-main-title">Help in Using Booklist Online</h3>
            <span className="oer-span font-size-12">While Booklist Online has been designed to be intuitive for most users, a few minutes with our <a className="oer-span-a font-size-12" href="/" title="">Quick Start Guide </a>will get you up and running more efficiently. The Quick Start Guide shows the easiest ways to find and view reviews using Quick Search and Browse.</span> <br />

            <span className="oer-span font-size-12">Additional information on special types of Quick Searches is available for: </span>
            <a className="oer-span-a font-size-12 block" href="/">Searching by Author</a>
            <a className="oer-span-a font-size-12 block" href="/">Searching by ISBN</a>
            <a className="oer-span-a font-size-12 block" href="/">Searching by Keyword</a> <br />

            <span className="oer-span font-size-12">For more detailed information on managing search results, look at <a className="oer-span-a font-size-12" href="/" title=""> Working with Search Results in Booklist Online.</a></span> <br />

            <span className="oer-span font-size-12"><a className="oer-span-a font-size-12" href="/" title="">Advanced Search in Booklist Online</a> will tell you more about Booklist Online content and how to use powerful advanced search features to find what you need.</span> <br />

            <span className="oer-span font-size-12">Finally, a list of common questions is available with their answers at our <a className="oer-span-a font-size-12" href="/" title=""> FAQ</a>. If your question is not there yet, please send an email to <a className="oer-span-a font-size-12" href="/" title="">info@booklistonline.com</a>.</span>
        </div>
    );
}

export default Help;