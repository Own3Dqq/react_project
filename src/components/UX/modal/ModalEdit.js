import React, { Component } from 'react';
import '../modal/Modal.css';

export class ModalEdit extends Component {
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

    componentDidUpdate(prevProps) {
        if (prevProps.datePost !== this.props.datePost) {
            this.setState({
                post: {
                    id: this.props.datePost.id,
                    title: this.props.datePost.title,
                    body: this.props.datePost.body,
                },
            });
        }
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
        const showHideClassName = this.props.stateEditModal ? 'modal display-block' : 'modal display-none';
        return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <div className='modal__content'>
                        <h2>Title</h2>
                        <input
                            className='modal-input__title'
                            type='text'
                            value={this.state.post.title}
                            onChange={(e) => this.handleInputChange(e, 'title')}
                        />
                        <h3>Content</h3>
                        <input
                            className='modal-input__body'
                            type='text'
                            value={this.state.post.body}
                            onChange={(e) => this.handleInputChange(e, 'body')}
                        />
                    </div>
                    <div className='modal__inner'>
                        <button
                            type='button'
                            className='btn btn-confirm'
                            value={this.state.post.body}
                            onClick={() => this.props.editSelectPost(this.state.post)}
                        >
                            Edit
                        </button>{' '}
                        <button type='button' className='btn btn-cancel' onClick={this.props.hideEditModal}>
                            Cancel
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default ModalEdit;
