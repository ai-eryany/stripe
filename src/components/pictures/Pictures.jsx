import React from 'react';
import visa from '../../assets/images/visa.png';
import invoice from '../../assets/images/invoice.png';
import terminal from '../../assets/images/terminal.png';
import phone from '../../assets/images/phone2.png';
import fraud from '../../assets/images/fraud.webp';

import './Pictures.scss';
import './Pictures-media.scss';

function Pictures() {
    return (
        <section className="pictures">
            <div className="visa">
                <img src={visa} alt="visa" />
            </div>

            <div className="invoice">
                <img src={invoice} alt="invoice" />
            </div>

            <div className="terminal">
                <img src={terminal} alt="terminal" />
            </div>

            <div className="phone">
                <img src={phone} alt="phone" />
            </div>

            <div className="fraud">
                <img src={fraud} alt="fraud" />
            </div>
        </section>
    );
}

export default Pictures;
