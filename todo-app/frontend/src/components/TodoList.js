import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggle, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>🎉 No todos yet. Add one to get started!</p>
      </div>
    );
  }

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-list">
      {activeTodos.length > 0 && (
        <div className="todo-section">
          <h2 className="section-title">Active Tasks ({activeTodos.length})</h2>
          {activeTodos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}
      
      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h2 className="section-title">Completed Tasks ({completedTodos.length})</h2>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
