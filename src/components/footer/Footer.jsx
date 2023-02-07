import React from 'react';
import { nanoid } from 'nanoid';
import useBrand from 'store/footer/brand/useBrand';
import useProducts from 'store/footer/products/useProducts';
import useSolutions from 'store/footer/solutions/useSolutions';
import useCustomSolutions from 'store/footer/customSolutions/useCustomSolutions';
import useDevelopers from 'store/footer/developers/useDevelopers';
import useResources from 'store/footer/resources/useResources';
import useCompany from 'store/footer/company/useCompany';

import './Footer.scss';
import './Footer-media.scss';

function Footer() {
    const brand = useBrand((state) => state.brand);
    const products = useProducts((state) => state.products);
    const solutions = useSolutions((state) => state.solutions);
    const customSolutions = useCustomSolutions((state) => state.customSolutions);
    const developers = useDevelopers((state) => state.developers);
    const resources = useResources((state) => state.resources);
    const company = useCompany((state) => state.company);

    return (
        <section className="footer">
            <div className="footer-content">
                <div className="footer-content__brand">
                    <div className="footer-content__brand-logo">
                        {brand
                            .filter((br) => {
                                return br.type === 'logo';
                            })
                            .map((br) => {
                                return <div key={nanoid()}>{br.src}</div>;
                            })}
                    </div>

                    <div className="footer-content__brand-location">
                        {brand
                            .filter((br) => {
                                return br.type === 'location';
                            })
                            .map((br) => {
                                return (
                                    <button key={nanoid()}>
                                        <span>{br.icon}</span>
                                        <span>{br.currentLocation}</span>
                                    </button>
                                );
                            })}
                    </div>

                    <div className="footer-content__brand-language">
                        {brand
                            .filter((br) => {
                                return br.type === 'language';
                            })
                            .map((br) => {
                                return (
                                    <button key={nanoid()}>
                                        <span>{br.icon}</span>
                                        <span>{br.currentLanguage}</span>
                                    </button>
                                );
                            })}
                    </div>

                    <div className="footer-content__brand-commerce">
                        {brand
                            .filter((br) => {
                                return br.type === 'commerce';
                            })
                            .map((br) => {
                                return (
                                    <div key={nanoid()}>
                                        <span>{br.icon}</span>
                                        <span>{br.text}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="center-links">
                    <div className="footer-content__links">
                        <div className="footer-content-box">
                            <h4>Products</h4>
                            <ul className="footer-content__products">
                                {products.map((product) => {
                                    return (
                                        <li key={nanoid()}>
                                            <a href={product.href}>{product.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="footer-content-box">
                            <h4>Solutions</h4>
                            <ul className="footer-content__solutions">
                                {solutions.map((solution) => {
                                    return (
                                        <li key={nanoid()}>
                                            <a href={solution.href}> {solution.name} </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="footer-content-box">
                            <h4>Integrations & CustomSolutions </h4>
                            <ul className="footer-content__customSolutions">
                                {customSolutions.map((custom) => {
                                    return (
                                        <li key={nanoid()}>
                                            <a href={custom.href}>{custom.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="footer-content-box">
                            <h4>Developers</h4>
                            <ul className="footer-content__developers">
                                {developers.map((developer) => {
                                    return (
                                        <li key={nanoid()}>
                                            <a href={developer.href}>{developer.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="footer-content-box">
                            <h4>Resources</h4>
                            <ul className="footer-content__resources">
                                {resources.map((resource) => {
                                    return (
                                        <li key={nanoid()}>
                                            <a href={resource.href}>{resource.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="footer-content-box">
                            <h4>Company</h4>
                            <ul className="footer-content__company">
                                {company.map((co) => {
                                    return (
                                        <li key={nanoid()}>
                                            <a href={co.href}>{co.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
