import React, { Component } from 'react';

import '../modal/Modal.css';

export class ModalDelete extends Component {
    render() {
        const { stateDeleteModal, hideDeleteModal, children } = this.props;

        const showHideClassName = stateDeleteModal ? 'modal__overlay display-block' : 'modal__overlay display-none';
        return (
            <div className={showHideClassName}>
                <section className='modal__main'>
                    <div className='modal__form'>
                        <div className='modal__wrapper'>
                            <h2 className='modal__message'>You are wanna delete this post? Are you sure?</h2>
                        </div>
                        <div className='modal__buttons'>
                            <button
                                className='modal__button'
                                type='button'
                                onClick={() => this.props.deleteSelectPost(this.props.datePost)}
                            >
                                Accept
                            </button>
                            <button className='modal__button' type='button' onClick={hideDeleteModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ModalDelete;
