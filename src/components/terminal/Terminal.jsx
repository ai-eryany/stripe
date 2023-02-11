import React from 'react';
import ide from '../../assets/images/ide.png';
import gear from '../../assets/icons/gear.svg';
import tab from '../../assets/icons/tab.svg';
import animatedBox from '../../assets/icons/animated-box.svg';
import html from '../../assets/icons/html.svg';

import './Terminal.scss';
import './Terminal-media.scss';

function Terminal() {
    return (
        <section className="terminal">
            <div className="terminal-lines">
                <div className="tall">
                    <div className="short"></div>
                </div>
            </div>

            <div className="terminal-content">
                <div className="terminal-upper">
                    <div className="upper-text">
                        <span className="terminal-head">
                            Designed for developers
                        </span>
                        <h1 className="terminal-title">
                            Ship more quickly with powerful and easy-to-use APIs
                        </h1>
                        <p className="terminal-desc">
                            Save engineering time with unified payments
                            functionality. We obsess over the maze of gateways,
                            payments rails, and financial institutions that make
                            up the global economic landscape so that your teams
                            can build what you need on one platform.
                        </p>
                        <button className="terminal-btn">
                            Read the docs &gt;
                        </button>
                    </div>
                    <div className="terminal-pic">
                        <img src={ide} alt="terminal" />
                    </div>
                </div>

                <div className="terminal-details">
                    <div className="box">
                        <div className="shrid">
                            <img src={gear} alt="gear" />
                        </div>
                        <h4 className="head">Use Stripe with your stack</h4>
                        <p className="desc">
                            We offer client and server libraries in everything
                            from React and PHP to .NET and iOS.
                        </p>
                        <button className="btn">See libraries &gt;</button>
                    </div>

                    <div className="box">
                        <div className="anim">
                            <img src={tab} alt="tab" />
                        </div>
                        <h4 className="head">Try no-code options</h4>
                        <p className="desc">
                            Customize and deploy payments interfaces directly
                            from the Stripe Dashboard.
                        </p>
                        <button className="btn">Explore no-code &gt;</button>
                    </div>

                    <div className="box">
                        <div className="shrid">
                            <img src={animatedBox} alt="animated-box" />
                        </div>
                        <h4 className="head">Explore prebuilt integrations</h4>
                        <p className="desc">
                            Integrate with systems including Adobe, Salesforce,
                            and NetSuite, or{' '}
                            <a href="#sync">sync Stripe data</a> to your
                            warehouse.
                        </p>
                        <button className="btn">View connectors &gt;</button>
                    </div>

                    <div className="box">
                        <div className="anim">
                            <img src={html} alt="html" />
                        </div>
                        <h4 className="head">Build an app on Stripe</h4>
                        <p className="desc">
                            Create a custom backend integration or interface
                            within Stripe—make it just for your team or list it
                            on the Stripe App Marketplace.
                        </p>
                        <button className="btn">Learn about apps &gt;</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Terminal;
