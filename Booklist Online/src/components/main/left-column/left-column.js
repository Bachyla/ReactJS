import React, { Fragment } from 'react';

import './left-column.css'

import QuickSearch from './quick-search';
import Issues from './issues';

const LeftColumn = () => {
    return (
        <Fragment>
            <div className="left-column">
                <QuickSearch />
                <Issues />
            </div>
        </Fragment>
    );
};

export default LeftColumn;