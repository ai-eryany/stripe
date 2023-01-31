import React, { useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './LoginForm.scss';
import './LoginForm-media.scss';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemeber] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberChange = (e) => {
        setRemeber((state) => !state);
    };

    return (
        <section className="login">
            <div className="center-lines">
                <div className="lines-background">
                    <div className="small"></div>
                </div>
            </div>
            <div className="top-background">
                <div className="left"></div>
                <div className="right"></div>
            </div>

            <div className="login-content">
                <h2 className="login__logo">Stripe</h2>
                <div className="login__form">
                    <h2 className="login__form-header">
                        Sign in to your account
                    </h2>
                    <form action="get" className="login__form-fields">
                        <div className="login__form-field">
                            <div className="login__form-label">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="login__form-input">
                                <input
                                    className="login__input"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>
                        <div className="login__form-field">
                            <div className="login__form-label">
                                <label htmlFor="password">Password</label>
                                <a
                                    href="https://project-stripe.netlify.app/login"
                                    className="login__link"
                                >
                                    Forgot your Password?
                                </a>
                            </div>
                            <div className="login__form-input">
                                <input
                                    className="login__input"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>
                        <div className="login__form-field">
                            <div className="login__form-remember">
                                <input
                                    className="login__checked"
                                    name="remember"
                                    type="checkbox"
                                    checked={remember}
                                    onChange={handleRememberChange}
                                />
                                <label htmlFor="remember">
                                    Stay signed in for a week
                                </label>
                            </div>
                        </div>
                        <div className="login__form-button">
                            <button type="submit" className="login__button">
                                Continue
                            </button>
                        </div>
                        <div className="login__form-link">
                            <a
                                href="https://project-stripe.netlify.app/login"
                                className="login__link"
                            >
                                Use single sign-on (SSO) instead
                            </a>
                        </div>
                    </form>
                </div>
                <div className="login-info">
                    <div className="info">
                        <p className="info-signup">
                            Don't have an account?{' '}
                            <a href="https://project-stripe.netlify.app/login">
                                Sign up
                            </a>{' '}
                        </p>

                        <div className="info-description">
                            <div className="info-security-tip">
                                <AiFillLock />
                                <span>Security tip</span>
                            </div>
                            <p>
                                On a shared computer, make sure to sign out when
                                you're done. This helps keep your account secure
                                from other people using your device.
                            </p>
                        </div>

                        <div className="info-question">
                            <span>is this tip helpful?</span>
                            <button type="button">
                                <FaThumbsUp className="icon" />
                                Yes
                            </button>
                            <button type="button">
                                <FaThumbsDown className="icon" />
                                No
                            </button>
                        </div>

                        <ul className="info-brand">
                            <li>
                                <a href="https://project-stripe.netlify.app/login">
                                    Stripe
                                </a>
                            </li>
                            <li>
                                <a href="https://project-stripe.netlify.app/login">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="https://project-stripe.netlify.app/login">
                                    Privacy & terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
