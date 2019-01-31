import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

const Main = ({ left, middle, right }) => {
    return (
        <div>
            <div>
                {left}
            </div>
            <div>
                {middle}
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}

Main.propTypes = {
    left: PropTypes.node,
    middle: PropTypes.node,
    right: PropTypes.node,
}

export default Main;