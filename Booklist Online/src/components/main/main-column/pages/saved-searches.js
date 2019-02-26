import React, { Component, Fragment } from 'react';

import NavAdvancedSearch from '../../../navigation-advanced-search';

class SavedSearches extends Component {
    render() {
        return (
            <Fragment>
                <NavAdvancedSearch ssActive={true}/>
                <div className="search-wrapper">
                    <h3 className="search-title grey-border margin-bottom-0">Saved Searches: Amanda</h3>
                    <span className="annotation">Number of saved searches: 10</span>
                    
                    <div className="saved-search-results-wrapper">
                        <span className="saved-search-lable">Name:</span>
                        <span className="saved-search-lable">Date Created:</span>
                        <span className="saved-search-lable">Last Updated:</span>
                    </div>

                    <div className="saved-search-results-wrapper ss-style margin-bottom-50">
                        <span className="ss-table-text">Search for 1.1</span>
                        <span className="ss-table-text">5/27/2010</span>
                        <span className="ss-table-text">5/27/2010</span>
                    </div>

                    <div className="saved-search-results-wrapper margin-bottom-15 ss-links-wrapper">
                        <a href="/" class="clear-form-button"><u>RUN SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>VIEW/EDIT SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>RENAME</u></a>
                        <a href="/" class="clear-form-button"><u>DELETE</u></a>
                    </div>

                    <div className="saved-search-results-wrapper ss-style margin-bottom-50">
                        <span className="ss-table-text">Search for girl</span>
                        <span className="ss-table-text">5/26/2010</span>
                        <span className="ss-table-text">5/26/2010</span>
                    </div>

                    <div className="saved-search-results-wrapper margin-bottom-15 ss-links-wrapper">
                        <a href="/" class="clear-form-button"><u>RUN SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>VIEW/EDIT SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>RENAME</u></a>
                        <a href="/" class="clear-form-button"><u>DELETE</u></a>
                    </div>

                    <div className="saved-search-results-wrapper ss-style margin-bottom-50">
                        <span className="ss-table-text">Search for dog</span>
                        <span className="ss-table-text">5/25/2010</span>
                        <span className="ss-table-text">5/25/2010</span>
                    </div>

                    <div className="saved-search-results-wrapper margin-bottom-15 ss-links-wrapper">
                        <a href="/" class="clear-form-button"><u>RUN SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>VIEW/EDIT SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>RENAME</u></a>
                        <a href="/" class="clear-form-button"><u>DELETE</u></a>
                    </div>

                    <div className="saved-search-results-wrapper ss-style margin-bottom-50">
                        <span className="ss-table-text">Search for cocaine</span>
                        <span className="ss-table-text">5/24/2010</span>
                        <span className="ss-table-text">5/24/2010</span>
                    </div>

                    <div className="saved-search-results-wrapper margin-bottom-15 ss-links-wrapper">
                        <a href="/" class="clear-form-button"><u>RUN SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>VIEW/EDIT SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>RENAME</u></a>
                        <a href="/" class="clear-form-button"><u>DELETE</u></a>
                    </div>

                    <div className="saved-search-results-wrapper ss-style margin-bottom-50">
                        <span className="ss-table-text">Search for science</span>
                        <span className="ss-table-text">5/24/2010</span>
                        <span className="ss-table-text">5/24/2010</span>
                    </div>

                    <div className="saved-search-results-wrapper margin-bottom-15 ss-links-wrapper">
                        <a href="/" class="clear-form-button"><u>RUN SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>VIEW/EDIT SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>RENAME</u></a>
                        <a href="/" class="clear-form-button"><u>DELETE</u></a>
                    </div>

                    <div className="saved-search-results-wrapper ss-style margin-bottom-50">
                        <span className="ss-table-text">Search for harry potter</span>
                        <span className="ss-table-text">5/24/2010</span>
                        <span className="ss-table-text">5/24/2010</span>
                    </div>

                    <div className="saved-search-results-wrapper margin-bottom-15 ss-links-wrapper">
                        <a href="/" class="clear-form-button"><u>RUN SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>VIEW/EDIT SEARCH</u></a>
                        <a href="/" class="clear-form-button"><u>RENAME</u></a>
                        <a href="/" class="clear-form-button"><u>DELETE</u></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SavedSearches;