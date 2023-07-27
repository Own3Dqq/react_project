import React, { Component } from 'react';
import '../modal/Modal.css';

export class ModalEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                id: props.datePost.id,
                title: props.datePost.title,
                body: props.datePost.body,
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
        return (
            <div className='modal__overlay'>
                <section className='modal__main'>
                    <form className='modal__form'>
                        <div className='modal__wrapper'>
                            <label className='modal__label' htmlFor='title'>
                                Title
                            </label>
                            <input
                                className='modal__input'
                                name='title'
                                type='text'
                                value={this.state.post.title}
                                onChange={(e) => this.handleInputChange(e, 'title')}
                            />
                        </div>
                        <div className='modal__wrapper'>
                            <label className='modal__label' htmlFor='body'>
                                Content
                            </label>
                            <input
                                className='modal__input'
                                name='body'
                                type='text'
                                value={this.state.post.body}
                                onChange={(e) => this.handleInputChange(e, 'body')}
                            />
                        </div>
                        <div className='modal__buttons'>
                            <button
                                className='modal__button btn btn-confirm'
                                type='button'
                                value={this.state.post.body}
                                onClick={() => this.props.editSelectPost(this.state.post)}
                            >
                                Edit
                            </button>
                            <button
                                className='modal__button btn btn-cancel'
                                type='button'
                                onClick={this.props.hideEditModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default ModalEdit;
