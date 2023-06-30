import React, { Component } from 'react';
import '../modal/Modal.css';

export class ModalEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: '',
                body: '',
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e, name) => {
        console.log(this.state);
        this.setState({
            ...this.state.post,
            post: {
                [name]: e.target.value,
            },
        });

        e.target.name = '';
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
                            // value={this.props.datePost.title}
                            onChange={(e) => this.handleInputChange(e, 'title')}
                        />
                        <h3>Content</h3>
                        <input
                            className='modal-input__body'
                            type='text'
                            value={this.state.post.body}
                            // value={this.props.datePost.body}
                            onChange={(e) => this.handleInputChange(e, 'body')}
                        />
                    </div>
                    <div className='modal__inner'>
                        <button
                            type='button'
                            className='btn btn-confirm'
                            onClick={() => this.props.editSelectedPost(this.state.post)}
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
