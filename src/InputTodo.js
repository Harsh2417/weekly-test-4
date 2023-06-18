import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const InputTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={text}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputTodo;
