import React, { Component } from 'react';
import '../modal/Modal.css';

export class ModalNewPost extends Component {
    constructor() {
        super();

        this.state = {
            post: {
                id: this.generateId(),
                title: '',
                body: '',
            },
            errorMessage: {
                title: 'Title must has at least 4 and 20 characters that include at least 1 uppercase characters.',
                body: '  Post content must has at least 3 and 255 characters.',
            },

            dirtyValue: {
                title: false,
                body: false,
            },
            formCheckValidation: {
                title: false,
                body: false,
            },
        };

        this.generateId = this.generateId.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillUnmount() {
        this.setState({
            post: {
                title: '',
                body: '',
            },
        });
    }

    generateId = () => {
        let maxId = 0;

        // arr.reverse().forEach((item) => {
        //     if (maxId < item.id) {
        //         maxId = maxId + item.id;
        //     }
        // });

        return maxId;
    };

    handleInputChange = (e, name) => {
        this.setState({
            post: {
                ...this.state.post,
                [name]: e.target.value,
            },
        });

        const checkUppercase = (string) => {
            return /[A-Z]/.test(string);
        };

        switch (e.target.name) {
            case 'title':
                if (e.target.value.length > 3 && e.target.value.length < 25 && checkUppercase(e.target.value)) {
                    this.setState({
                        formCheckValidation: {
                            ...this.state.formCheckValidation,
                            [name]: true,
                        },
                    });
                } else {
                    this.setState({
                        formCheckValidation: {
                            ...this.state.formCheckValidation,
                            [name]: false,
                        },
                    });
                }
                break;
            case 'body':
                if (e.target.value.length > 3 && e.target.value.length < 255) {
                    this.setState({
                        formCheckValidation: {
                            ...this.state.formCheckValidation,
                            [name]: true,
                        },
                    });
                } else {
                    this.setState({
                        formCheckValidation: {
                            ...this.state.formCheckValidation,
                            [name]: false,
                        },
                    });
                }
                break;
            default:
                return;
        }
    };

    blurHandler = (e) => {
        switch (e.target.name) {
            case 'title':
                this.setState({
                    dirtyValue: {
                        ...this.state.dirtyValue,
                        title: true,
                    },
                });
                break;
            case 'body':
                this.setState({
                    dirtyValue: {
                        ...this.state.dirtyValue,
                        body: true,
                    },
                });
                break;
            default:
                return;
        }
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
                                onBlur={(e) => this.blurHandler(e)}
                            />
                            {this.state.dirtyValue.title && !this.state.formCheckValidation.title && (
                                <span className='modal__errorMessage'>{this.state.errorMessage.title}</span>
                            )}
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
                                onBlur={(e) => this.blurHandler(e)}
                            />
                            {this.state.dirtyValue.body && !this.state.formCheckValidation.body && (
                                <span className='modal__errorMessage'>{this.state.errorMessage.body}</span>
                            )}
                        </div>
                        <div className='modal__buttons'>
                            <button
                                className='modal__button'
                                onClick={(e) => this.props.createNewPost(e, this.state.post)}
                                disabled={!this.state.formCheckValidation.title || !this.state.formCheckValidation.body}
                                type='submit'
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
