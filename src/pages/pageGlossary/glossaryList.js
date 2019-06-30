import React from 'react';
import { withData } from '../../HOC';
import ItemCard from '../../components/itemCard';

const GlossaryList = props => {
    const { data, isLoading } = props;
    const listClassName = `page-glossary__list ${isLoading ? 'is-loading' : ''}`;

    if (isLoading || !data) {
        return (
            <div className={listClassName}>
                <div className="page-glossary__list-item">The list is emplty</div>
            </div>
        )
    }

    if (!data) console.error('There is no data! \nData: ', data);

    const listItem = data.map(({ id, name, image }) => (
        <li className="page-glossary__list-item" key={id}>
            <ItemCard
                image={image}
                name={name}
            />
        </li>)
    );

    return (
        <ul className={listClassName}>
            { listItem }
        </ul>
    )
}

export default withData(GlossaryList);
