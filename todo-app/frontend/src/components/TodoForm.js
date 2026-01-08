import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({
        title: title.trim(),
        description: description.trim(),
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="todo-input"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Add a description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="todo-textarea"
          rows="3"
        />
      </div>
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
