import React, { Fragment } from 'react';

import './left-column.css'

import QuickSearch from './quick-search';
import Issues from './issues';
import FromBookLinks from './from-book-links'

const LeftColumn = () => {
    return (
        <Fragment>
            <section className="left-column">
                <QuickSearch />
                <Issues />
                <FromBookLinks />
            </section>
        </Fragment>
    );
};

export default LeftColumn;