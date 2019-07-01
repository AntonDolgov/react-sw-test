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

const mapSwapiMethodsToProps = swapiService => ({
    ...swapiService,
    getData: swapiService.getList
});
const mapStateToProps = ({activeCategoryId}) => ({activeCategoryId});

export default compose(
                    withSwapiService(mapSwapiMethodsToProps),
                    connect(mapStateToProps),
                    withActiveCategory
                )(GlossaryContainer);
