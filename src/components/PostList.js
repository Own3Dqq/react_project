import React, { Component } from 'react';
import '../style/PostList.css';
import PostItem from './PostItem';
import ModalEdit from './UX/modal/ModalEdit';
import ModalDelete from './UX/modal/ModalDelete';
import ModalNewPost from './UX/modal/ModalNewPost';

export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            modalDelete: false,
            modalEdit: false,
            modalNewPost: false,
            post: {
                id: null,
                title: '',
                body: '',
            },
        };

        this.createNewPost = this.createNewPost.bind(this);
        this.showDeleteModal = this.showDeleteModal.bind(this);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
        this.showEditModal = this.showEditModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
        this.editSelectPost = this.editSelectPost.bind(this);
        this.deleteSelectPost = this.deleteSelectPost.bind(this);
        this.showModalNewPost = this.showModalNewPost.bind(this);
        this.hideModalNewPost = this.hideModalNewPost.bind(this);
    }

    createNewPost = (e, data) => {
        e.preventDefault();
        this.setState({
            modalNewPost: false,
            posts: this.state.posts.concat(data),
        });
    };

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

    hideDeleteModal = (e) => {
        e.preventDefault();
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

    hideEditModal = (e) => {
        e.preventDefault();
        this.setState({ modalEdit: false });
    };

    showModalNewPost = () => {
        this.setState({
            modalNewPost: true,
        });
    };

    hideModalNewPost = (e) => {
        e.preventDefault();
        this.setState({
            modalNewPost: false,
        });
    };

    render() {
        return (
            <>
                <header className='header'>
                    <button onClick={this.showModalNewPost} className='btn__new-post'>
                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
                            <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
                        </svg>
                        {''}
                        Create new post
                    </button>
                </header>
                <main className='main'>
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
                </main>

                <ModalEdit
                    datePost={this.state.post}
                    stateEditModal={this.state.modalEdit}
                    hideEditModal={this.hideEditModal}
                    editSelectPost={this.editSelectPost}
                />
                <ModalDelete
                    datePost={this.state.post}
                    stateDeleteModal={this.state.modalDelete}
                    hideDeleteModal={this.hideDeleteModal}
                    deleteSelectPost={this.deleteSelectPost}
                >
                    {'You are wanna delete this post? Are you sure?'}
                </ModalDelete>
                <ModalNewPost
                    stateCreatePost={this.state.modalNewPost}
                    createNewPost={this.createNewPost}
                    hideModalNewPost={this.hideModalNewPost}
                ></ModalNewPost>
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
