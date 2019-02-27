import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './quick-search.css';

import QSTitle from '../../../../assets/images/qstitle.gif';
import SubmitImage from '../../../../assets/images/submit-image.gif';

const QuickSearch = () => {
    return (
        <Fragment>
            <img 
                src={QSTitle}                 
                alt="Quick Search Title"
                width="180"
                height="25"/>
            <form>
                <div className="main-search-input">
                    <input 
                        className="search-input"
                        type="text"
                        name="search" />
                    <Link to="/search-results/">
                        <input
                            className="submit-input"
                            type="image" 
                            src={SubmitImage} 
                            alt="Submit Form" />
                    </Link>
                </div>
                <div className="search-parameters">
                    <select>
                        <option value="A">Title</option>
                        <option value="B">Author</option>
                        <option value="C">ISBN</option>
                        <option value="D">Keyword</option>
                    </select>
                    <select>
                        <option value="A">All Content</option>
                        <option value="B">Reviews Only</option>
                        <option value="C">Feature Content Only</option>
                    </select>
                    <select>
                        <option value="A">All Sections</option>
                        <option value="B">Adult Books</option>
                        <option value="C">Books for Youth</option>
                        <option value="D">Media</option>
                        <option value="E">Reference Sources</option>
                    </select>
                    
                    <Link to="/search-reviews/">Go to Advanced Search</Link>
                </div>
            </form>
        </Fragment>
    );
};

export default QuickSearch;