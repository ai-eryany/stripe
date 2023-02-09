import React from 'react';
import booking from '../../assets/images/booking.svg';
import statista from '../../assets/images/statista.svg';
import shareNow from '../../assets/images/shareNow.svg';
import joyn from '../../assets/images/joyn.svg';
import asos from '../../assets/images/asosMarketplace.svg';
import sales from '../../assets/images/salesforce.svg';
import axel from '../../assets/images/axelSpringer.svg';
import shopify from '../../assets/images/shopify.svg';

import './Brands.scss';
import './Brands-media.scss';

function Brands() {
    return (
        <section className="brands">
            <div>
                <img src={booking} alt="" />
            </div>

            <div>
                <img src={statista} alt="" />
            </div>

            <div>
                <img src={shareNow} alt="" />
            </div>

            <div>
                <img src={joyn} alt="" />
            </div>

            <div>
                <img src={asos} alt="" />
            </div>

            <div>
                <img src={sales} alt="" />
            </div>

            <div>
                <img src={axel} alt="" />
            </div>

            <div>
                <img src={shopify} alt="" />
            </div>
        </section>
    );
}

export default Brands;
