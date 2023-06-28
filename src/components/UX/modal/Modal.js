import React from 'react';
import '../modal/Modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <div className='modal__inner'>
                    <button type='button' className='btn btn-confirm' onClick={handleClose}>
                        Confirm
                    </button>{' '}
                    <button type='button' className='btn btn-cancel' onClick={handleClose}>
                        Cancel
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Modal;
