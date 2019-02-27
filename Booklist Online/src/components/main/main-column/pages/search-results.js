import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import leftarrow from '../../../../assets/images/leftarrow.gif';
import rightarrow from '../../../../assets/images/rightarrow.gif';
import selectAllImage from '../../../../assets/images/search-results/select-all.gif';
import selectAllTitles from '../../../../assets/images/search-results/select-all-page.gif';
import clearSelected from '../../../../assets/images/search-results/clear-selected.gif'

const SearchResults = () => {
    return (
        <Fragment>
            <span className="desc">Your Quick search on book returns 50 results</span>
            <div className="search-results-wrapper">
                <a class="oer-span-a font-size-10 margin-bottom-15 margin-top-12" href="/" target="_blank"><b><u>Save Search</u></b></a>

                <div className="search-results-nav">
                    <img src={leftarrow} width="6" height="8" alt="arrow"/>
                    <span className="prev-page-button">Previous Page</span>
                    
                        <Link className="nav-button selected" to="/page1/"><u>1</u></Link>
                        <Link className="nav-button" to="/page2/"><u>2</u></Link>
                    
                    <span className="next-page-button"><u>Next Page</u></span>
                    <img src={rightarrow} width="6" height="8" alt="arrow"/>
                </div>

                <div className="sort-settings">
                    <div className="flex-column margin-left-right-5">
                        <span className="sort-settings-title">Display:</span>
                        <select>
                            <option value="A">Citation</option>
                            <option value="B">Citation + Partial Text</option>
                        </select>
                    </div>

                    <div className="flex-column margin-left-right-5">
                        <span className="sort-settings-title">Sort:</span>
                        <select>
                            <option value="A">Date</option>
                            <option value="B">Title</option>
                            <option value="B">Author/Editor</option>
                        </select>
                    </div>
                </div>

                <div className="sort-settings grey-border">
                        <img src={selectAllTitles} alt="Select all titles"/>
                        <img src={selectAllImage} alt="Select all Images"/>
                        <img src={clearSelected} alt="Clear Selected"/>
                    </div>
            </div>
         </Fragment>
    )
}

export default SearchResults;