import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../AC';
import { withSwapiService } from '../../HOC';
import { compose } from '../../helpers';

import Header from '../../components/header';

class HeaderContainer extends Component {

    render () {
        const { activeCategoryId } = this.props;

        return (
            <Header
                activeCategory={activeCategoryId}
                changeCategory={changeCategory}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = ({activeCategoryId}) => ({activeCategoryId});

export default compose(
                    withSwapiService(),
                    connect(mapStateToProps , {changeCategory})
                )(HeaderContainer);
