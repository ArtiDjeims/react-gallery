import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './gallery-list.css';

import SearchBlock from '../search-block';
import GalleryBlock from '../gallery-block';
import ErrorMessage from '../error-message';

export default class GalleryList extends Component {

    state = {
        isLoading: true,
        contentAnimationStart: false,
        hasError: false
    };

    componentDidMount() {
        window.addEventListener('load', this.onDomLoaded);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.onDomLoaded)
    }


    onDomLoaded = () => {
        this.setState({
            isLoading: false,
            contentAnimationStart: true
        })
    }

    setToLoading = () => {
        this.setState({
            isLoading: true,
            contentAnimationStart: false
        })
        setTimeout(() => this.onDomLoaded(), 3000);
    }

    onCloudError = () => {
        this.setState({
            hasError: true
        })
    }

    render() {
        let GalleryBlocks = [];

        const { isLoading, contentAnimationStart, hasError } = this.state;

        const { selectImage, onSearchTermChange, searchTerms } = this.props;

        const galleryListStyle = {
            opacity: contentAnimationStart ? '1' : '0'
        }

        const Loader = () => {
            return <div className="loading_screen"><div className="loader"></div></div>;
        }

        for (let i = 0; i < 12; i++) {
            GalleryBlocks.push(<GalleryBlock selectImage={selectImage} id={i} key={i} onCloudError={this.onCloudError} searchTerms={searchTerms} />);
        }

        return (
            <React.Fragment>
                {isLoading ? <Loader /> : null}
                <div style={galleryListStyle} className="gallery_list">
                    <SearchBlock setToLoading={this.setToLoading} onSearchTermChange={onSearchTermChange} />
                    {hasError ? <ErrorMessage message="Error! Can't connect to the cloud..." /> : GalleryBlocks}
                </div>
            </React.Fragment>
        )
    }
}

GalleryList.propTypes = {
    searchTerms: PropTypes.string,
    selectImage: PropTypes.func,
    onSearchTermChange: PropTypes.func,
}