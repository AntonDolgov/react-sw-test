import React, {Component} from 'react';
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

    render () {
        const { isDropdownActive } = this.state;

        const dropdownClassName =
        `header__dropdown ${isDropdownActive ?
        'header__dropdown-btn--is-active' : ''}`;

        return (
            <div className={dropdownClassName}>
                <button onClick={this.onDropdownClick} className="header__dropdown-btn" type="button">
                    <span className="header__dropdown-btn-circle header__dropdown-btn-circle--first">&nbsp;</span>
                    <span className="header__dropdown-btn-circle header__dropdown-btn-circle--second">&nbsp;</span>
                    <span className="header__dropdown-btn-circle header__dropdown-btn-circle--third">&nbsp;</span>
                </button>

                <div className="header__dropdown-content">
                    <HeaderNavList vertical/>
                </div>
            </div>);

    }
}
