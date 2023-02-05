import React from 'react';

import './Scale.scss';
import './Scale-media.scss';

function Scale() {
    return (
        <div className="scale">
            <h1 className="scale-title">Scale Here</h1>
            <div className="globe-container">
                <div id="globe"></div>
            </div>
        </div>
    );
}

export default Scale;