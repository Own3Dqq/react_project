import React, { Component } from 'react';
import '../style/PostList.css';
import PostItem from './PostItem';
import ModalEdit from './UX/modal/ModalEdit';
import ModalDelete from './UX/modal/ModalDelete';

export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            modalDelete: false,
            modalEdit: false,
            post: {
                id: null,
                title: '',
                body: '',
            },
        };

        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
        this.editSelectPost = this.editSelectPost.bind(this);
        this.deleteSelectPost = this.deleteSelectPost.bind(this);
    }

    deleteSelectPost = (post) => {
        const filteredPosts = this.state.posts.filter((item) => item.id !== post.id);
        this.setState({
            modalDelete: false,
            posts: filteredPosts,
        });
    };

    editSelectPost = (data) => {
        console.log(data);
        const updatedPosts = this.state.posts.map((post) => {
            if (post.id === data.id) {
                return {
                    ...post,
                    title: data.title,
                    body: data.body,
                };
            }
            return post;
        });
        this.setState({
            modalEdit: false,
            posts: updatedPosts,
        });
    };

    showDeleteModal = (id) => {
        this.setState({
            post: {
                id: id,
                title: '',
                body: '',
            },
            modalDelete: true,
        });
    };

    hideDeleteModal = () => {
        this.setState({ modalDelete: false });
    };

    showEditModal = (id, title, body) => {
        this.setState({
            modalEdit: true,
            post: {
                id: id,
                title: title,
                body: body,
            },
        });
    };

    hideEditModal = () => {
        this.setState({ modalEdit: false });
    };

    render() {
        return (
            <>
                <ul className='post__list'>
                    {this.state.posts.map((post, index) => {
                        return (
                            <PostItem
                                key={index}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                showEditModal={this.showEditModal}
                                showDeleteModal={this.showDeleteModal}
                            />
                        );
                    })}
                </ul>
                <ModalEdit
                    datePost={this.state.post}
                    stateEditModal={this.state.modalEdit}
                    hideEditModal={this.hideEditModal}
                    editSelectPost={this.editSelectPost}
                ></ModalEdit>
                <ModalDelete
                    datePost={this.state.post}
                    stateDeleteModal={this.state.modalDelete}
                    hideDeleteModal={this.hideDeleteModal}
                    deleteSelectPost={this.deleteSelectPost}
                >
                    {'You are wanna delete this post? Are you sure?'}
                </ModalDelete>
            </>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => this.setState({ posts: data }));
    }
}

export default PostList;
