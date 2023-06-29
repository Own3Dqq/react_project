import React, { Component } from 'react';
import '../style/PostItem.css';

export class PostItem extends Component {
    render() {
        return (
            <>
                <li className='list__item item' data-id={this.props.id}>
                    <div className='item__content'>
                        <h2 className='item__title'>{this.props.title}</h2>
                        <p className='item__text'>{this.props.body}</p>
                    </div>
                    <div className='item__wrapper'>
                        <button className='item__button item__button-edit' onClick={this.props.showEditModal}>
                            Edit
                        </button>
                        <button className='item__button item__button-delete' onClick={this.props.showDeleteModal}>
                            Delete
                        </button>
                    </div>
                </li>
            </>
        );
    }
}

export default PostItem;
