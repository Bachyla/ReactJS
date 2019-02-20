/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';

import './from-book-links.css';

import FBLTitle from '../../../../assets/images/from book links/fbl-title.gif';
import Poster from '../../../../assets/images/from book links/poster1.png';

const FromBookLinks = () => {
    return(
        <Fragment>
            <img 
                src={FBLTitle}     
                alt="Quick Search Title"
                width="180"
                height="25"/>
            <img 
                src={Poster}                 
                className="issue-image"
                alt="Issue Image"
                width="150"
                height="200"/>
            <h3 className="main-title">February 1, 2019 </h3>
            <a  className="font-size-10 link"
                    href="*">January 2019 Issue</a>
            <a  className="font-size-10 link"
                    href="*">Common Core Resources</a>
        </Fragment>
    );
};

export default FromBookLinks;
