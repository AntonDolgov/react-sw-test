import React, {Component} from 'react';

export default View => class withData extends Component {

    state = {
        data: null,
        loading: true,
        error: false
    }

    componentDidUpdate(prevProps) {
        const hasNewGetData = this.props.getData !== prevProps.getData;
        const hasNewCategory = this.props.selectedCategory !== prevProps.selectedCategory;

        if (hasNewGetData || hasNewCategory) {
            this.update();
        }
    }

    componentDidMount() {
        this.update();
    }

    update() {
        const { selectedCategory, selectedImageCategory } = this.props;

        this.setState( {
            loading: true,
            error: false
        });

        this.props.getData({ selectedCategory, selectedImageCategory })
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
