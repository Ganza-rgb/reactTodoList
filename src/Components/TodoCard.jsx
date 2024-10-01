import React from 'react';

export default function TodoCard(props) {
  // Destructuring props
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <div className='todoItemContainer'>
      <li className='todoItem'>
        {children}
        <div className='todoAction'>

          {/* Button to edit todo */}
          <button onClick={() => handleEditTodo(index)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>

          {/* Button to delete todo */}
          <button onClick={() => handleDeleteTodo(index)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
