import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Please check if the server is running.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData) => {
    try {
      const response = await axios.post(`${API_URL}/todos`, todoData);
      setTodos([response.data, ...todos]);
      setError(null);
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', err);
    }
  };

  const updateTodo = async (id, updates) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${id}`, updates);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
      setError(null);
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error('Error updating todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', err);
    }
  };

  const toggleComplete = async (id, completed) => {
    await updateTodo(id, { completed: !completed });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">📝 Todo List</h1>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        <TodoForm onAdd={addTodo} />
        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
