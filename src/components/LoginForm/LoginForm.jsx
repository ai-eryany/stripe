import React, { useState } from 'react';

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
            <h2 className="login__logo">Stripe</h2>
            <div className="login__form">
                <h2 className="login__form-header">Sign in to your account</h2>
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
        </section>
    );
}

export default LoginForm;
