import React from 'react';
import tag from '../../assets/icons/tag.svg';
import code from '../../assets/icons/code.svg';

import './More.scss';
import './More-media.scss';

function More() {
    return (
        <section className="more">
            <div className="more-content">
                <div className="more-text">
                    <div className="more-title">
                        <h3>Ready to get started?</h3>
                    </div>
                    <p className="more-desc">
                        Explore Stripe Payments, or create an account instantly
                        and start accepting payments. You can also contact us to
                        design a custom package for your business.
                    </p>
                    <button className="more-btn">Start now &gt;</button>
                    <button className="more-btn">Contact Sales &gt;</button>
                </div>

                <div className="more-details">
                    <div className="box">
                        <div className="anim">
                            <img src={tag} alt="" />
                        </div>
                        <h4 className="head">Always know what you pay</h4>
                        <p className="desc">
                            Integrated per-transaction pricing with no hidden
                            fees.
                        </p>
                        <button className="btn">Pricing details &gt;</button>
                    </div>

                    <div className="box">
                        <div className="anim">
                            <img src={code} alt="" />
                        </div>
                        <h4 className="head">Start your integration</h4>
                        <p className="desc">
                            Get up and running with Stripe in as little as 10
                            minutes.
                        </p>
                        <button className="btn">API reference &gt;</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default More;
