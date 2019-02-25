import React, { Component, Fragment } from 'react';

import NavAdvancedSearch from '../../../navigation-advanced-search';

class SavedSearches extends Component {
    render() {
        return (
            <Fragment>
                <NavAdvancedSearch ssActive={true}/>
                <div className="search-wrapper">
                    
                </div>
            </Fragment>
        )
    }
}

export default SavedSearches;