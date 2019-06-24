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

        <div className="header__main">
            <div className="container">
                <ul className="header__categories">
                    <li className="header__categories-item">
                        <button
                            className="header__categories-btn"
                            type="button"
                            style={{backgroundImage: 'url(https://starwars-visualguide.com/assets/img/characters/1.jpg)'}}
                            title="Characters">
                                Characters
                        </button>
                    </li>
                    <li className="header__categories-item">
                        <button
                            className="header__categories-btn"
                            type="button"
                            style={{backgroundImage: 'url(https://starwars-visualguide.com/assets/img/starships/5.jpg)'}}
                            title="Starships">
                                Starships
                        </button>
                    </li>
                    <li className="header__categories-item">
                        <button
                            className="header__categories-btn"
                            type="button"
                            style={{backgroundImage: 'url(https://starwars-visualguide.com/assets/img/vehicles/8.jpg)'}}
                            title="Vehicles">
                                Vehicles
                        </button>
                    </li>
                    <li className="header__categories-item">
                        <button
                            className="header__categories-btn"
                            type="button"
                            style={{backgroundImage: 'url(https://starwars-visualguide.com/assets/img/planets/2.jpg)'}}
                            title="Planets">
                                Planets
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;
