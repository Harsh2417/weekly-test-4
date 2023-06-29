import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedText.trim() !== '') {
      updateTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveClick} style={{ margin: '0.25rem' }}>
            <span role="img" aria-label="Save">💾</span>
          </button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEditClick} style={{ margin: '0.25rem' }}>
            <span role="img" aria-label="Edit">✏️</span>
          </button>
        </>
      )}
      <button onClick={handleDeleteClick} style={{ margin: '0.25rem' }}>
        <span role="img" aria-label="Delete">❌</span>
      </button>
    </li>
  );
};

export default TodoItem;
