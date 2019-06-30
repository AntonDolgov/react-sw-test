import React, {Component} from 'react';

import './style.css';
import imgPlaceholder from '../../../images/placeholder.png';

export default class Image extends Component {

    state = {
        imgSrc: imgPlaceholder,
        loading: true,
        error: false
    }

    onLoad = () => {
        const { image } = this.props;

        this.setState({
            imgSrc: image,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            imgSrc: imgPlaceholder,
            error: true,
            loading: false
        });
    }

    componentDidUpdate(prevProps) {
        const hasNewImage = this.props.image !== prevProps.image;

        if (hasNewImage) {
            this.update();
        }
    }

    componentDidMount() {
        this.update();
    }

    update() {
        const { image } = this.props;

        this.setState( {
            loading: true,
            error: false
        });

        const img = new Image();
        img.onload = this.onLoad();
        img.src = image;
    }

    render () {
        const { className } = this.props;
        const { loading, imgSrc } = this.state;
        const imgClassName = `picture ${className ? className : ''} ${loading ? 'is-loading' : ''}`

        return (
            <picture className={imgClassName}>
                <img
                    className="picture__img"
                    src={imgSrc}
                    alt=""
                />
            </picture>
        );
    };
}
