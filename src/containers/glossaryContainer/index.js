import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSwapiService, withActiveCategory } from '../../HOC';
import { compose } from '../../helpers';

import PageGlossary from '../../pages/pageGlossary';

class GlossaryContainer extends Component {

    render () {
        return (
            <PageGlossary {...this.props} />
        );
    }
}

const mapStateToProps = ({activeCategoryId}) => ({activeCategoryId});

export default compose(
                    withSwapiService(swapiService => ({ getData: swapiService.getList })),
                    connect(mapStateToProps),
                    withActiveCategory
                )(GlossaryContainer);
