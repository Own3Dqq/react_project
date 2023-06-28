import React, { Component } from 'react';
import '../style/App.css';
import PostList from './PostList';

export class App extends Component {
    state = {
        posts: [],
    };

    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <PostList posts={this.state.posts} />
                </div>
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
