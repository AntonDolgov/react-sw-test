import React, {Component} from 'react';
import './style.css';

import GlossaryList from './glossaryList';
import GlossaryPagination from './glossaryPagination';

export default class extends Component {

    render () {
        const { selectedCategory, getData, selectedImageCategory } = this.props;

        this.props.getPaginationLinks({ selectedCategory }).
            then(res => console.log(res))

        return (
            <div className="page-glossary">
                <div className="container">
                    <GlossaryPagination />

                    <GlossaryList
                        selectedCategory={selectedCategory}
                        selectedImageCategory={selectedImageCategory}
                        getData={getData}
                    />
                </div>
            </div>
        );
    }
}
