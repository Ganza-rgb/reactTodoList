import React from 'react';

export default function TodoInput(props) {
  // Destructuring props
  const { handleTodo, todoValue, setTodoValue } = props;

  return (
    <div className='InputTodo'>
      <h2>Todo App</h2>
      
      {/* Input field for todo */}
      <input 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        type='text' 
        placeholder='Enter Todo...' 
      />
      {/* Button to add todo */}
      <button onClick={() => { handleTodo(todoValue); setTodoValue(''); }}>Add</button>
    </div>
  );
}
