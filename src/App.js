
import React from 'react';
import './App.css';
import './style.css'
import PostList from './components/PostList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
