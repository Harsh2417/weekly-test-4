import React from 'react';
import Header from './Header';
import TodosLogic from './TodosLogic';
import { TodoProvider } from './TodoContext';

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <Header />
        <TodosLogic />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
