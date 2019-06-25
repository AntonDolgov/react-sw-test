import React, {Component} from 'react';

export default class extends Component {
    state = {
        isButtonHover: false
    }

    render () {
        const params = [
            {
                id: 'category-characters',
                className: 'is-first',
                isSelected: true,
                value: 'Characters',
                img: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
            },
            {
                id: 'category-starsships',
                className: 'is-second',
                value: 'Starships',
                img: 'https://starwars-visualguide.com/assets/img/starships/5.jpg'
            },
            {
                id: 'category-vehicles',
                className: 'is-third',
                value: 'Vehicles',
                img: 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg'
            },
            {
                id: 'category-planets',
                className: 'is-fourth',
                value: 'Planets',
                img: 'https://starwars-visualguide.com/assets/img/planets/2.jpg'
            }
        ];

        const onMouseDown = ({currentTarget}) => {
            this.setState({
                isButtonHover: true
            });
        };

        const onMouseLeave = ({currentTarget}) => {
            this.setState({
                isButtonHover: false
            });
        };

        const listItems = params.map(item => {
            const { className, value, img, id, isSelected = false } = item;
            const { isButtonHover } = this.state;
            const btnId = `btn-${id}`;
            const isBtnSelected = !isButtonHover && isSelected;
            const btnClassName = `header__categories-btn ${className} ${isBtnSelected ? 'is-selected' : ''}`;

            return (
                <li className="header__categories-item" key={id}>
                    <div
                        id={btnId}
                        className={btnClassName}
                        onMouseEnter={onMouseDown}
                        onMouseLeave={onMouseLeave}

                        style={{backgroundImage: `url(${img})`}}
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
