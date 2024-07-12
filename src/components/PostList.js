// src/components/PostList.js
import React, { useState } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import Table from 'react-bootstrap/Table';

const PostList = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Default Post', body: 'This is the default post body.' }
  ]);
  const [error, setError] = useState(null);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className='content'>
      <PostForm addPost={addPost} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <Post key={post.id} post={post} updatePost={updatePost} deletePost={deletePost} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PostList;
