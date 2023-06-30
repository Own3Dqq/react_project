import React, { Component } from 'react';

import '../modal/Modal.css';

export class ModalDelete extends Component {
    render() {
        const { stateDeleteModal, hideDeleteModal, children } = this.props;

        const showHideClassName = stateDeleteModal ? 'modal display-block' : 'modal display-none';
        return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <h2>{children}</h2>
                    <div className='modal__inner'>
                        <button
                            type='button'
                            className='btn btn-confirm'
                            onClick={() => this.props.deleteSelectPost(this.props.datePost)}
                        >
                            Accept
                        </button>{' '}
                        <button type='button' className='btn btn-cancel' onClick={hideDeleteModal}>
                            Cancel
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default ModalDelete;
