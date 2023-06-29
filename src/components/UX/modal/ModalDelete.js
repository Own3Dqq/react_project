import React, { Component } from 'react';

import '../modal/Modal.css';

export class ModalDelete extends Component {
    render() {
        const showHideClassName = this.props.stateDeleteModal ? 'modal display-block' : 'modal display-none';
        return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <h2>{this.props.children}</h2>
                    <div className='modal__inner'>
                        <button type='button' className='btn btn-confirm' onClick={this.props.deleteSelectPost}>
                            Accept
                        </button>{' '}
                        <button type='button' className='btn btn-cancel' onClick={this.props.hideDeleteModal}>
                            Cancel
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}

export default ModalDelete;
