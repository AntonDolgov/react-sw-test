import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { categories } from '../../fixtures';

export default class extends Component {
    static propTypes = {
        activeCategoryId: PropTypes.string.isRequired,
        changeCategory: PropTypes.func.isRequired
    };

    state = {
        isButtonHover: false
    };

    params = [
        ...categories
    ];

    orders = this.params.map(({order, id, tabindex}) => {
        return {
            id,
            order,
            tabindex
        };
    });

    onMouseEnter = ({currentTarget}) => {
        const pageMain = false;

        this.setState({
            isButtonHover: !pageMain
        });
    };

    onMouseLeave = ({currentTarget}) => {
        this.setState({
            isButtonHover: false
        });
    };

    onClick = ({id, order, tabindex}) => () => {
        const { activeCategoryId: previousId } = this.props;
        const previousOrderObj = this.orders.find(({order, id: currentId}) => currentId === previousId);
        const currentOrderObj = this.orders.find(({order, id: currentId}) => currentId === id);

        // Предыдущему активному элементу устанавливаем значение order и tabindex текущего, и наоборот
        currentOrderObj.order = previousOrderObj.order;
        currentOrderObj.tabindex = previousOrderObj.tabindex;
        previousOrderObj.order = order;
        previousOrderObj.tabindex = tabindex;

        this.props.changeCategory(id);
    };

    render () {
        const { activeCategoryId } = this.props;
        const { isButtonHover } = this.state;
        const { onMouseEnter, onMouseLeave, onClick } = this;

        const listItems = this.params.map(item => {
            const { value, img, id } = item;
            const btnId = `btn-${id}`;
            const isBtnSelected = !isButtonHover && activeCategoryId === id;
            const btnClassName = `header__categories-btn ${isBtnSelected ? 'is-selected' : ''}`;
            const { order, tabindex } = this.orders.find(({order, id: currentId}) => currentId === id);

            return (
                <li className="header__categories-item" key={id}>
                    <div
                        id={btnId}
                        className={btnClassName}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={onClick({id, order, tabindex})}
                        data-order={order}
                        style={{backgroundImage: `url(${img})`}}
                        tabindex={tabindex}
                        title={value}>
                            {value}
                    </div>

                    <p className="header__categories-title">{value}</p>
                </li>
            );
        });

        return (<ul className="header__categories">{listItems}</ul>);
    }
};
