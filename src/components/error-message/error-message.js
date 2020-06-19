import React, { Component } from 'react';

import './error-message.css';

export default class ErrorMessage extends Component {

    state = {
        showing: true
    }

    componentDidMount() {
        setTimeout(() =>
            this.setState({
                showing: false
            }), 8000
        );
    }

    render() {
        const { message } = this.props;
        const { showing } = this.state;

        const messageStyles = {
            opacity: showing ? '1' : '0',
            transform: showing ? 'translateX(0)' : 'translateX(101%)'
        }

        return (
            <div style={messageStyles} className="error_message">{message}</div>
        );
    }
}