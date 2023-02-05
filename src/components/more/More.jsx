import React from 'react';
import Tag from '../../assets/icons/tag.png';
import Code from '../../assets/icons/code.png';

function More() {
    return (
        <section className="more">
            <div className="more-background">
                <div className="left-small"></div>
                <div className="left-big"></div>
                <div className="right-small"></div>
                <div className="right-big"></div>
            </div>

            <div className="more-content">
                <div className="more-content-start">
                    <h2 className="more-content-start__title">
                        Ready to get started?
                    </h2>
                    <p className="more-content-start__des">
                        Explore{' '}
                        <a href="#link" className="inline-link">
                            Stripe Payments
                        </a>
                        , or create an account instantly and start accepting
                        payments. You can also contact us to design a custom
                        package for your business.
                    </p>
                    <div className="more-content-start__buttons">
                        <button>Start now</button>
                        <button>Contact sales</button>
                    </div>
                </div>
                <div className="more-content-widgets">
                    <div className="more-content-widgets-details">
                        <img src={Tag} alt="" />
                        <img src={Tag} alt="" />
                        <h5>Always know what you pay</h5>
                        <p>
                            Integrated per-transaction pricing with no hidden
                            fees.
                        </p>
                        <a href="#link" className="inline-link">
                            Pricing details
                        </a>
                    </div>
                    <div className="more-content-widgets-reference">
                        <img src={Code} alt="" />
                        <h5>Start your integration</h5>
                        <p>
                            Get up and running with Stripe in as little as 10
                            minutes.
                        </p>
                        <a href="#link" className="inline-link">
                            API reference
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default More;
