import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const handleUpdateClick = () => {
    updateTodo({
      ...todo,
      text: newText
    });
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={newText} onChange={handleInputChange} />
          <button onClick={handleUpdateClick}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{todo.text}</span>
          <div style={{ marginLeft: '10px' }}>
            <button onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button style={{ marginLeft: '10px' }} onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
