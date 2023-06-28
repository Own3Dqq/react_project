import React, { Component } from 'react';
import '../style/PostItem.css';
import Button from './UX/button/Button';

export class PostItem extends Component {
    render() {
        return (
            <>
                <li className='list__item item'>
                    {this.props.text}
                    <div className='item__wrapper'>
                        <button onClick={this.props.showModal}>Show modal window</button>
                        {/* <Button activeEvent={this.props.showModal}>Edit</Button>
                        <Button activeEvent={this.props.showModal}>Delete</Button> */}
                    </div>
                </li>
            </>
        );
    }
}

export default PostItem;
