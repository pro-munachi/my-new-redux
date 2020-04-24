import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import Post from './Post';
import PostForm from './PostForm';


import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">    
      <PostForm />
      <hr />
      <Post />
    </div>
    </Provider>
  );
}

export default App;
