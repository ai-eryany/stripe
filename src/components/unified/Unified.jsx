import React from 'react';

import './Unified.scss';
import './Unified-media.scss';

function Unified() {
    return (
        <section className="unified">
            <div className="unified-wrapper">
                <span className="unified-head">Unified platform</span>
                <div className="unified-title">
                    <h2>A fully integrated suite of payments products</h2>
                </div>
                <div className="unified-content">
                    <p className="unified-desc">
                        We bring together everything that’s required to build
                        websites and apps that accept payments and send payouts
                        globally. Stripe’s products power payments for
                        <a href="#retials"> online and in-person retailers</a>,
                        <a href="#subscriptions"> subscriptions businesses</a>,
                        <a href="#marketplaces">
                            software platforms and marketplaces
                        </a>
                        , and everything in between.
                    </p>
                    <p className="unified-desc">
                        We also help companies <a href="#fraud">beat fraud</a>,{' '}
                        <a href="#invoices">send invoices</a>,{' '}
                        <a href="#cards">issue virtual and physical cards</a>,{' '}
                        <a href="#checkout">reduce friction at checkout</a>,{' '}
                        <a href="#finance">get financing</a>,{' '}
                        <a href="#spending">manage business spend</a>, and much
                        more.
                    </p>
                </div>
                <button className="unified-btn">
                    Start with payments &gt;
                </button>
            </div>
        </section>
    );
}

export default Unified;
