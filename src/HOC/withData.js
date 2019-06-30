import React, {Component} from 'react';
import Preloader from '../components/simpleComponents/preloader';

export default View => class withData extends Component {

    state = {
        data: null,
        loading: true,
        error: false
    }

    componentDidUpdate(prevProps) {
        const hasNewGetData = this.props.getData !== prevProps.getData;
        const hasNewParams = this.props.params !== prevProps.params;

        if (hasNewGetData || hasNewParams) {
            this.update();
        }
    }

    componentDidMount() {
        this.update();
    }

    update() {
        const { params } = this.props;

        this.setState( {
            loading: true,
            error: false
        });

        this.props.getData(params)
            .then(data => {
                this.setState({
                    data,
                    loading: false
                })
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    loading: false
                });
            });
    }

    render () {
        const { loading, data, error } = this.state;

        if (error) {
            return 'Error!';
        }

        return (
            <View data={data} isLoading={loading} {...this.props} />
        );
    }
}
