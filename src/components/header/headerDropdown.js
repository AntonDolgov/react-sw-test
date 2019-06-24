import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import HeaderNavList from './headerNavList';

export default class extends Component {
    state = {
        isDropdownActive: false
    }

    onDropdownClick = () => {
        this.setState({
            isDropdownActive: !this.state.isDropdownActive
        })
    }

    onDropdownOverlayClick = () => {
        this.setState({
            isDropdownActive: false
        })
    }

    render () {
        const { isDropdownActive } = this.state;

        const dropdownClassName =
        `header__dropdown ${isDropdownActive ?
        'header__dropdown-btn--is-active' : ''}`;

        const Overlay = () => {
            return createPortal(
                    <div className="header__dropdown-overlay" onClick={this.onDropdownOverlayClick}></div>,
                    document.body
                );
        };

        return (
            <div className={dropdownClassName}>
                <button onClick={this.onDropdownClick} className="header__dropdown-btn" type="button">
                    <span className="header__dropdown-btn-circle header__dropdown-btn-circle--first">&nbsp;</span>
                    <span className="header__dropdown-btn-circle header__dropdown-btn-circle--second">&nbsp;</span>
                    <span className="header__dropdown-btn-circle header__dropdown-btn-circle--third">&nbsp;</span>
                </button>

                <div className="header__dropdown-content">
                    <HeaderNavList vertical/>

                    {isDropdownActive ? <Overlay /> : ''}
                </div>
            </div>);

    }
}
