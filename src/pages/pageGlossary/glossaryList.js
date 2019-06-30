import React from 'react';
import { withData } from '../../HOC';

const GlossaryList = props => {
    const { data, isLoading } = props;
    const listClassName = isLoading ? 'is-loading' : '';
    const listItem = (data => {
            if (!data) {
                return <li>The list is emplty</li>
            }

            return data.map(({id, name}) => (
                    <li key={data.id}>
                        {name}
                    </li>)
                )
        })(data);

    return (
        <ul className={listClassName}>
            { listItem }
        </ul>
    )
}

export default withData(GlossaryList);
