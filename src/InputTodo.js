import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const InputTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default InputTodo;
