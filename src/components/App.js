import React, { Component } from 'react';
import '../style/App.css';
import PostList from './PostList';

export class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <PostList />
                </div>
            </div>
        );
    }
}

export default App;
