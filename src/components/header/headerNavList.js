import React from 'react';
import propTypes from 'prop-types';

const HeaderNavList = (props) => {
    const { vertical = null} = props;

    return (
        <ul className={`header__nav-list ${vertical ? 'header__nav-list--vertical' : ''}`}>
            <li className="header__nav-item">
                <a href="#id" className="header__nav-link">
                    <span className="header__nav-link-text">Luke Skywalker's home</span></a>
            </li>
            <li className="header__nav-item">
                <a href="#id" className="header__nav-link"><span className="header__nav-link-text">Luke Skywalker's info</span></a>
            </li>
            <li className="header__nav-item">
                <a href="#id" className="header__nav-link"><span className="header__nav-link-text">Categories</span></a>
            </li>
        </ul>);
};

HeaderNavList.propTypes = {
    vertical: propTypes.bool
}

export default HeaderNavList;
