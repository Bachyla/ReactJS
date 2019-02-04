import React, { Fragment } from 'react';

import './quick-search.css';

import QSTitle from '../../../../assets/images/qstitle.gif';
import SubmitImage from '../../../../assets/images/submit-image.gif';

const QuickSearch = () => {
    return (
        <Fragment>
            <img 
                src={QSTitle} 
                alt="Quick Search Title"/>
            <form>
                <div className="main-search-input">
                    <input 
                        className="search-input"
                        type="text"
                        name="search" />
                    <input
                        className="submit-input"
                        type="image" 
                        src={SubmitImage} 
                        alt="Submit Form" />
                </div>
                <div className="search-parameters">
                    <select>
                        <option selected>Title</option>
                        <option>Author</option>
                        <option>ISBN</option>
                        <option>Keyword</option>
                    </select>
                    <select>
                        <option selected>All Content</option>
                        <option>Reviews Only</option>
                        <option>Feature Content Only</option>
                    </select>
                    <select>
                        <option selected>All Sections</option>
                        <option>Adult Books</option>
                        <option>Books for Youth</option>
                        <option>Media</option>
                        <option>Reference Sources</option>
                    </select>
                    <a href="/AdvancedSearchReviews.aspx">Go 
                        to Advanced Search</a>
                </div>
            </form>
        </Fragment>
    );
};

export default QuickSearch;