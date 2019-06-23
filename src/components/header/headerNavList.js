import React from 'react';

export default (props) => {
    const { vertical = null} = props;

    return (
        <ul className={`header__nav-list ${vertical ? 'header__nav-list--vertical' : ''}`}>
            <li className="header__nav-item">
                <a href="#id" className="header__nav-link">Link 1</a>
            </li>
            <li className="header__nav-item">
                <a href="#id" className="header__nav-link">Link 2</a>
            </li>
            <li className="header__nav-item">
                <a href="#id" className="header__nav-link">Link 3</a>
            </li>
        </ul>);
};
