import React from 'react';
import './style.css';

import HeaderDropdown from './headerDropdown';
import HeaderNavList from './headerNavList';
import HeaderCategories from './headerCategories';

const Header = () => (
    // header--page-list header--page-main
    <header className="header header--page-item">
        <div className="header__bg"></div>

        <nav className="header__nav">
            <div className="header__nav-container container">
                <HeaderNavList />

                <HeaderDropdown />
            </div>
        </nav>

        <div className="header__main">
            <div className="container">
                <HeaderCategories />

                <div className="header__item">
                    <button className="header__item-btn" type="button">Follow</button>

                    <p className="header__item-name">Luke Skywalker</p>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
