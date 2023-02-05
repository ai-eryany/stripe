import React from 'react';

import './Hero.scss';
import './Hero-media.scss';

function Hero() {
    return (
        <div className="hero">
            <div className="gradient-wrapper">
                <canvas id="gradient-canvas" data-transition-in></canvas>
            </div>
            <div className="title-wrapper">
                <h1 className="title">Payments infrastructure for the internet</h1>
                <p className="copy title__second">Payments infrastructure for the internet</p>
                <p className="copy title__overlay">Payments infrastructure for the internet</p>
            </div>
        </div>
    );
}

export default Hero;
