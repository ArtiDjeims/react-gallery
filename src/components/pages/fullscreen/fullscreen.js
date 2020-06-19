import React, { Component } from 'react';

import './fullscreen.css';

class FullScreen extends Component {

    state = {
        time: Date.now()
    }

    interval;
    updates = 0;

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 8000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const pictureSrc = `https://source.unsplash.com/random?sig=${this.updates = this.updates + 1}`;

        return (
            <div className='fullscreen'>
                <img src={pictureSrc} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" }} alt="Loading from Unsplash" />
                <a href="/">
                    <div className="footer left">Go to the Home Page</div>
                </a>
                <div className="footer right">Images from Unsplash</div>
            </div>
        );
    }
}

export default FullScreen;