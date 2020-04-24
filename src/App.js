import React from 'react';
import './App.css';
import Post from './Post';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">    
      <PostForm />
      <hr />
      <Post />
    </div>
  );
}

export default App;
