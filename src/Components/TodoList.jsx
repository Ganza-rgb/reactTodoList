import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  // Destructuring props
  const { todoList, handleDeleteTodo, handleEditTodo } = props;

  return (
    <ul className='todoContainer'>
        
      {/* Mapping through todoList to render TodoCard components */}
      {todoList.map((todo, todoIndex) => (
        <TodoCard 
          key={todoIndex} 
          index={todoIndex} 
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
