import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(todo._id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="edit-input"
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          className="edit-textarea"
          rows="2"
        />
        <div className="edit-actions">
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, todo.completed)}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3 className="todo-title">{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
        </div>
      </div>
      <div className="todo-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="edit-button"
          disabled={todo.completed}
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="delete-button"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
