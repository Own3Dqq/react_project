import React, { Component } from 'react';
import PostItem from './PostItem';

export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        const { id, title, body } = this.props;
        return (
            <>
                <ul className='post__list'>
                    {this.props.items.map((item, index) => {
                        return <PostItem text={item.body} key={index} />;
                    })}
                </ul>
            </>
        );
    }
}

export default PostList;

/* 
            <li className='list__item' data-id={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>Modal</p>
                    </Modal>
                    <div className='list-item__inner'>
                        <button className='list-item__btn edit'>Edit</button>
                        <button onClick={this.showModal} className='list-item__btn delete'>
                            Delete
                        </button>
                    </div>
                </li>

*/
