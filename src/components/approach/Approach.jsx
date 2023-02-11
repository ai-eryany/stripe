import React from 'react';
import circle from '../../assets/icons/circle.svg';
import play from '../../assets/icons/play.svg';
import line from '../../assets/icons/line.svg';
import gears from '../../assets/icons/gears.svg';

import './Approach.scss';
import './Approach-media.scss';

function Approach() {
    return (
        <section className="approach">
            <span className="approach-head">Why Stripe</span>
            <div className="approach-title">
                <h2>A technology-first approach to payments and finance</h2>
            </div>
            <div className="approach-details">
                <div className="box">
                    <div className="anim">
                        <img src={circle} alt="circle" />
                    </div>
                    <h4 className="head">Close to the metal</h4>
                    <p className="desc">
                        From <a href="#integrations">direct integrations</a>{' '}
                        with card networks and banks to checkout flows in the
                        browser, we operate on and optimize at every level of
                        the financial stack.
                    </p>
                </div>

                <div className="box">
                    <div className="anim">
                        <img src={play} alt="play" />
                    </div>
                    <h4 className="head">Fastest-improving platform</h4>
                    <p className="desc">
                        We release <a href="#features">hundreds of features</a>{' '}
                        and improvements each year to help you stay ahead of
                        industry shifts. {'('}On average, we deploy our
                        production API 16x per day.{')'}
                    </p>
                </div>

                <div className="box">
                    <div className="anim">
                        <img src={line} alt="line" />
                    </div>
                    <h4 className="head">Battle-tested reliability</h4>
                    <p className="desc">
                        Our systems operate with <a href="#uptime">99.99%+</a>{' '}
                        uptime and are highly scalable and redundant. Stripe is
                        certified to the highest compliance standards.
                    </p>
                </div>

                <div className="box">
                    <div className="anim">
                        <img src={gears} alt="gears" />
                    </div>
                    <h4 className="head">Intelligent optimizations</h4>
                    <p className="desc">
                        Our machine learning models train on{' '}
                        <a href="#billions">billions</a> of data points and help
                        increase revenue across conversion, fraud, revenue
                        recovery, and more.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Approach;
