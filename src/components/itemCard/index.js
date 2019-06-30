import React from 'react';

import Image from '../../components/simpleComponents/image';
import './style.css';

const ItemCard = props => {
    const { name, image } = props;

    return (
        <div className="item-card">
            <Image className="item-card__pic" image={image} />

            <div className="item-card__name-wrapper">
                <span className="item-card__name">{name}</span>
            </div>
        </div>
    );
};

export default ItemCard;
