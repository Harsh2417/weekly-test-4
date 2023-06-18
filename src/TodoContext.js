import React, { createContext, useState } from 'react';

// Create the TodoContext
export const TodoContext = createContext();

// Create the TodoProvider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add a todo item
  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text: text,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle the editing state of a todo item
  const toggleEditTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  };

  // Update the text of a todo item
  const updateTodoText = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
          };
        }
        return todo;
      })
    );
  };

  // Delete a todo item
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleEditTodo,
        updateTodoText,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
