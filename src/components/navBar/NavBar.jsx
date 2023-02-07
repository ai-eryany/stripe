import React, { useState } from 'react';
import useBrand from 'store/footer/brand/useBrand';
import { RxHamburgerMenu } from 'react-icons/rx';

import './NavBar.scss';
import './Navbar-media.scss';

function NavBar() {
    const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
    const brand = useBrand((state) => state.brand);

    const handleHaburgerClick = () => {
        setIsHamburgerVisible((state) => !state);
    };

    return (
        <nav className="navbar">
            <div className="logo">{brand.filter((br) => br.type === 'logo')[0]?.src}</div>

            <div className="hamburger-icon">
                <RxHamburgerMenu className="icon" onClick={handleHaburgerClick} />
            </div>
            {isHamburgerVisible && (
                <div className="links">
                    <ul className="nav-list">
                        <li>
                            <a href="#prodcuts">Prodcuts</a>
                        </li>
                        <li>
                            <a href="#solutions">Solutions</a>
                        </li>
                        <li>
                            <a href="#developers">Developers</a>
                        </li>
                        <li>
                            <a href="#resources">Resources</a>
                        </li>
                        <li>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li>
                            <button>Sign in {`>`}</button>
                        </li>
                    </ul>
                </div>
            )}

            <div className="links-media">
                <ul className="nav-list-media">
                    <li>
                        <a href="#prodcuts">Prodcuts</a>
                    </li>
                    <li>
                        <a href="#solutions">Solutions</a>
                    </li>
                    <li>
                        <a href="#developers">Developers</a>
                    </li>
                    <li>
                        <a href="#resources">Resources</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                </ul>
            </div>

            <div className="sign-in">
                <button>Sign in {`>`}</button>
            </div>
        </nav>
    );
}

export default NavBar;
