// import React, { useContext } from 'react';
// import { TodoContext } from './TodoContext';
// import TodoItem from './TodoItem';

// const TodoList = () => {
//   const { todos } = useContext(TodoContext);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
//       <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px' }}>
//         <h2>Todos</h2>
//         <ul style={{ listStyle: 'none', padding: '0' }}>
//           {todos.map((todo) => (
//             <TodoItem key={todo.id} todo={todo} />
//           ))}
//         </ul>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
//           <input type="text" placeholder="Enter a todo" style={{ width: '100%', padding: '5px' }} />
//           <button style={{ width: '100%', marginTop: '10px' }}>Add Todo</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodosList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;

