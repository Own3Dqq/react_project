import React, { Component } from 'react';
import '../modal/Modal.css';

export class ModalNewPost extends Component {
    constructor() {
        super();

        this.state = {
            post: {
                id: '',
                title: '',
                body: '',
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e, name) => {
        this.setState({
            post: {
                ...this.state.post,
                [name]: e.target.value,
            },
        });
    };

    render() {
        const showHideClassName = this.props.stateCreatePost
            ? 'modal__overlay display-block'
            : 'modal__overlay display-none';
        return (
            <div className={showHideClassName}>
                <div className='modal__main'>
                    <form className='modal__form'>
                        <div className='modal__wrapper'>
                            <label className='modal__label' htmlFor='title'>
                                Title
                            </label>
                            <input
                                className='modal__input'
                                type='text'
                                name='title'
                                value={this.state.post.title}
                                onChange={(e) => this.handleInputChange(e, 'title')}
                            />
                        </div>
                        <div className='modal__wrapper'>
                            <label className='modal__label' htmlFor='body'>
                                Body
                            </label>
                            <textarea
                                className='modal__textarea'
                                type='text'
                                name='body'
                                value={this.state.post.body}
                                onChange={(e) => {
                                    this.handleInputChange(e, 'body');
                                }}
                            />
                        </div>
                        <div className='modal__buttons'>
                            <button
                                className='modal__button'
                                onClick={(e) => this.props.createNewPost(e, this.state.post)}
                            >
                                Create
                            </button>
                            <button className='modal__button' onClick={this.props.hideModalNewPost}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ModalNewPost;
