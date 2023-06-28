import React, { Component } from 'react';
import '../style/PostList.css';
import PostItem from './PostItem';
import Modal from './UX/modal/Modal';

export class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
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
        return (
            <>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <div>{this.props.posts[1].body}</div>
                </Modal>
                <ul className='post__list'>
                    {this.props.posts.map((post, index) => {
                        return <PostItem showModal={this.showModal} text={post.body} key={index} />;
                    })}
                </ul>
            </>
        );
    }
}

export default PostList;
