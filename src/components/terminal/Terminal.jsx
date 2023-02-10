import React from 'react';
import ide from '../../assets/images/ide.png';

import './Terminal.scss';
import './Terminal-media.scss';

function Terminal() {
    return (
        <section className="terminal">
            <div className="terminal-background">
                <div className="short"></div>
                <div className="tall"></div>
            </div>

            <div className="terminal-content">
                <span className="terminal-head">Designed for developers</span>

                <h1 className="terminal-title">
                    Ship more quickly with powerful and easy-to-use APIs
                </h1>

                <p className="terminal-desc">
                    Save engineering time with unified payments functionality.
                    We obsess over the maze of gateways, payments rails, and
                    financial institutions that make up the global economic
                    landscape so that your teams can build what you need on one
                    platform.
                </p>

                <button className="terminal-btn">Read the docs &gt;</button>

                <div className="terminal-pic">
                    <img src={ide} alt="terminal" />
                </div>

                <div className="terminal-details">
                    <div className="box">
                        <img className="anim" src="" alt="gear" />
                        <h4 className="head">Use Stripe with your stack</h4>
                        <p className="desc">
                            We offer client and server libraries in everything
                            from React and PHP to .NET and iOS.
                        </p>
                        <button className="btn">See libraries &gt;</button>
                    </div>

                    <div className="box">
                        <img className="anim" src="" alt="tab" />
                        <h4 className="head">Try no-code options</h4>
                        <p className="desc">
                            Customize and deploy payments interfaces directly
                            from the Stripe Dashboard.
                        </p>
                        <button className="btn">Explore no-code &gt;</button>
                    </div>

                    <div>
                        <img className="anim" src="" alt="animated-box" />
                        <h4 className="head">Explore prebuilt integrations</h4>
                        <p className="desc">
                            Integrate with systems including Adobe, Salesforce,
                            and NetSuite, or{' '}
                            <a href="#sync">sync Stripe data</a> to your
                            warehouse.
                        </p>
                        <button className="btn">View connectors &gt;</button>
                    </div>

                    <div>
                        <img className="anim" src="" alt="html" />
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
