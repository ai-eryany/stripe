import React from 'react';

import './Footer.scss';
import './Footer-media.scss';

function Footer() {
    // mocking data

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content__brand">
                    <div className="footer-content__brand-logo"></div>
                    <div className="footer-content__brand-country"></div>
                    <div className="footer-content__brand-language"></div>
                    <div className="footer-content__brand-commerce"></div>
                </div>

                <ul className="footer-content__products"></ul>
                <ul className="footer-content__solutions"></ul>
                <ul className="footer-content__integrations"></ul>
                <ul className="footer-content__developers"></ul>
                <ul className="footer-content__resources"></ul>
                <ul className="footer-content__company"></ul>
            </div>
        </footer>
    );
}

export default Footer;
