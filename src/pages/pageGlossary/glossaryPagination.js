import React from 'react';

const GlossaryPagination = props => {


    return (
        <ul className="page-glossary__pagination">
            <li className="page-glossary__pagination-item">
                <a href="javascript:;" className="page-glossary__pagination-link page-glossary__pagination-link--disabled page-glossary__pagination-prev">&lt;</a>
            </li>
            <li className="page-glossary__pagination-item">
                <a href="javascript:;" className="page-glossary__pagination-link page-glossary__pagination-link--active">1</a>
            </li>
            <li className="page-glossary__pagination-item">
                <a href="javascript:;" className="page-glossary__pagination-link">2</a>
            </li>
            <li className="page-glossary__pagination-item">
                <a href="javascript:;" className="page-glossary__pagination-link">3</a>
            </li>
            <li className="page-glossary__pagination-item">
                <span className="page-glossary__pagination-dots">...</span>
            </li>
            <li className="page-glossary__pagination-item">
                <a href="javascript:;" className="page-glossary__pagination-link">9</a>
            </li>
            <li className="page-glossary__pagination-item">
                <a href="javascript:;" className="page-glossary__pagination-link page-glossary__pagination-next">&gt;</a>
            </li>
        </ul>
    )
}

export default GlossaryPagination;
