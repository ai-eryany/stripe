import React from 'react';

import './Scale.scss';
import './Scale-media.scss';

function Scale() {
    return (
        <section className="scale">
            <div className="scale-lines">
                <div className="tall">
                    <div className="short"></div>
                </div>
            </div>
            {/* <div className="globe-container">
                <div id="globe"></div>
            </div> */}
            <div className="scale-content">
                <span className="scale-head">Global scale</span>

                <div className="scale-title">
                    <h2>The backbone for global commerce</h2>
                </div>

                <p className="scale-desc">
                    Stripe makes moving money as easy and programmable as moving
                    data. Our teams are based in offices around the world and we
                    process hundreds of billions of euros each year for
                    ambitious businesses of all sizes.
                </p>

                <div className="scale-details">
                    <div className="box">
                        <h4 className="head">250M+</h4>
                        <p className="desc">
                            API requests per day, peaking at 13,000 requests a
                            second
                        </p>
                    </div>

                    <div className="box">
                        <h4 className="head">99.999%</h4>
                        <p className="desc">
                            historical uptime for stripe services.
                        </p>
                    </div>

                    <div className="box">
                        <h4 className="head">47+</h4>
                        <p className="desc">countires with local aquiring.</p>
                    </div>

                    <div className="box">
                        <h4 className="head">135+</h4>
                        <p className="desc">
                            currencies and payment methods supported.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Scale;
