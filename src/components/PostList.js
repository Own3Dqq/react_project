import React, { Component } from 'react';
import '../style/PostList.css';
import PostItem from './PostItem';
import ModalEdit from './UX/modal/ModalEdit';
import ModalDelete from './UX/modal/ModalDelete';

export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [...this.props.posts],
            modalDelete: false,
            modalEdit: false,
        };
        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost = (index) => {
        console.log('Delete post');

        const arr = [...this.state.posts];
        arr.slice(index, 1);

        this.setState({
            modalDelete: false,
            posts: arr,
        });
    };

    editPost = () => {
        console.log('Edit post');
        // this.setState({
        //     modalEdit: false,
        //     posts: [...data],
        // });
    };

    showDeleteModal = () => {
        this.setState({ modalDelete: true });
    };

    hideDeleteModal = () => {
        this.setState({ modalDelete: false });
    };

    showEditModal = () => {
        this.setState({ modalEdit: true });
    };

    hideEditModal = () => {
        this.setState({ modalEdit: false });
    };

    render() {
        console.log('list');
        return (
            <>
                <ul className='post__list'>
                    {this.props.posts.map((post, index) => {
                        return (
                            <PostItem
                                key={index}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                showDeleteModal={this.showDeleteModal}
                                showEditModal={this.showEditModal}
                            />
                        );
                    })}
                </ul>
                <ModalEdit
                    stateEditModal={this.state.modalEdit}
                    hideEditModal={this.hideEditModal}
                    editSelectedPost={this.editPost}
                ></ModalEdit>
                <ModalDelete
                    stateDeleteModal={this.state.modalDelete}
                    hideDeleteModal={this.hideDeleteModal}
                    deleteSelectPost={this.deletePost}
                >
                    {'You are wanna delete this post? Are you sure?'}
                </ModalDelete>
            </>
        );
    }
}

export default PostList;
