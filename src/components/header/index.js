import React, {Component} from 'react';
import './style.css';

import HeaderDropdown from './headerDropdown';
import HeaderNavList from './headerNavList';

const Header = () => (
    <header className="header">
        <nav className="header__nav">
            <div className="header__nav-container container">
                <HeaderNavList />

                <HeaderDropdown />
            </div>
        </nav>
    </header>
);

export default Header;
