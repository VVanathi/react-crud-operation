// src/components/PostForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        addPost(response.data);
        setTitle('');
        setBody('');
      })
      .catch(error => {
        setError('Failed to create post. Please try again.');
        console.error('There was an error creating the post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required />
      <button type="submit">Add Post</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default PostForm;
