import React, { Component } from 'react';
import '../modal/Modal.css';

export class ModalEdit extends Component {
    constructor() {
        super();
    }

    render() {
        const showHideClassName = this.props.stateEditModal ? 'modal display-block' : 'modal display-none';
        return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <div className='modal__inner'>
                        <button type='button' className='btn btn-confirm' onClick={this.props.editSelectedPost}>
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
