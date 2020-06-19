import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './search-block.css';

class SearchBlock extends Component {

    state = {
        query: ''
    }

    onKeywordChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }

    search = () => {
        this.props.onSearchTermChange(this.state.query);
        this.props.setToLoading();
    }

    render() {
        return (
            <div className="search_block" id="searchBlock">
                <h3>This is a SearchBlock</h3>
                <p>Look up for different pictures to get inspired. The search is powered by Unsplash. Enjoy!</p>
                <input
                    type="text"
                    placeholder="Enter your keywoards..."
                    onChange={this.onKeywordChange}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            this.search()
                        }
                    }}
                />
                <div className='footer_link'>
                    You can also visit <Link to="/fullscreen">FullScreen Slideshow</Link>.
                </div>
            </div>
        )
    }
};

export default SearchBlock;