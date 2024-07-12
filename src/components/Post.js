// src/components/Post.js
import React, { useState } from 'react';
import axios from 'axios';

const Post = ({ post, updatePost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [error, setError] = useState(null);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setError(null);

    axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, { title, body })
      .then(response => {
        updatePost(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating post:', error);
        setError('Failed to update post. Please try again.');
      });
  };

  const handleDelete = () => {
    setError(null);

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then(() => {
        deletePost(post.id);
      })
      .catch(error => {
        console.error('Error deleting post:', error);
        setError('Failed to delete post. Please try again.');
      });
  };

  return (
    <tr>
      <td>{isEditing ? <input value={title} onChange={(e) => setTitle(e.target.value)} /> : post.title}</td>
      <td>{isEditing ? <textarea value={body} onChange={(e) => setBody(e.target.value)} /> : post.body}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
      {error && <td colSpan="3" style={{ color: 'red' }}>{error}</td>}
    </tr>
  );
};

export default Post;
