import React, { Component } from 'react';
import Button from './UX/button/Button';

export class PostItem extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.someChange}>{this.props.text}</button>
            </>
        );
    }
}

export default PostItem;
