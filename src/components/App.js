import React, { Component } from 'react';
import './style/App.css';
import PostList from './PostList';
import Modal from './UX/modal/Modal';

export class App extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
        };
    }

    render() {
        return (
            <div className='App'>
                <Modal></Modal>
                <PostList items={this.state.posts} />
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    posts: [...data],
                })
            );
    }
}

export default App;
