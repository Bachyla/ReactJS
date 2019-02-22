import React from 'react';

import './right-column.css';

import FollowButtons from './follow-buttons';

import AdvertisingImage from '../../../assets/images/advertising/right-column-banner.png'

const RightColumn = () => {
    return (
        <div className="right-column">
            <FollowButtons />
            <a href="https://bls.pcdfusion.com/pcd/Order?iKey=I**MW8" title="Click here to subscribe!"><img src={AdvertisingImage} className="rc-adverting-img" alt="Click here to subscribe!" width="160" height="600"></img></a>
        </div>
    );
};

export default RightColumn;