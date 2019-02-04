import React, { Fragment } from 'react';


import QuickSearch from './quick-search';
import Issues from './issues';

const LeftColumn = () => {
    return (
        <Fragment>
            <QuickSearch />
            <Issues />
        </Fragment>
    );
};

export default LeftColumn;