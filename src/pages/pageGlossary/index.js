import React, {Component} from 'react';
import './style.css';

import GlossaryList from './glossaryList';

export default class extends Component {

    render () {
        const { selectedCategory, getData } = this.props;

        return (
            <div className="page-glossary">
                <div className="container">
                    <GlossaryList params={selectedCategory} getData={getData}/>
                </div>
            </div>
        );
    }
}
