import React from 'react';
import './style.css';

import HeaderDropdown from './headerDropdown';
import HeaderNavList from './headerNavList';
import HeaderCategories from './headerCategories';

const Header = () => (
    <header className="header header--page-list">
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
            </div>
        </div>
    </header>
);

export default Header;
