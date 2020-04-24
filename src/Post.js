import React from 'react'

class Post extends React.Component {
    
    

    

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            </div>
        ))
        return (
            <div>
           <h1>Post</h1>
           {postItems}
            </div>
        )
    }
} 

export default Post