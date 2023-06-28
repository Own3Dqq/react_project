import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button {...this.props} className='btn'>
                {this.props.children}
            </button>
        );
    }
}
