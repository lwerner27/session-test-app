import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleBurger, burgerActive }) => {
    return (
        <nav
            className='navbar is-primary'
            role='navigation'
            aria-label='main navigation'
        >
            <div className='navbar-brand'>
                <Link as='a' className='navbar-item' to='/'>
                    <h1 className='is-size-5'>
                        <strong>Express Session Test</strong>
                    </h1>
                </Link>

                <Link
                    as='a'
                    role='button'
                    className={`navbar-burger burger ${
                        burgerActive ? 'is-active' : ''
                    }`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                    onClick={toggleBurger}
                    to='#'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </Link>
            </div>

            <div
                id='navbarBasicExample'
                className={`navbar-menu is-link ${
                    burgerActive ? 'is-active' : ''
                }`}
            >
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <Link
                                to='/registration'
                                as='a'
                                className='button is-white'
                            >
                                Register
                            </Link>
                            <Link
                                to='/login'
                                as='a'
                                className='button is-light'
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
