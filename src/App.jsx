import { useState, useEffect } from "react"; 
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

export default function App() {
  // State to manage the list of todo
  const [todoList, setTodoList] = useState([]);

  // State to manage the current value of the todo input
  const [todoValue, setTodoValue] = useState('');

  // Function to save the todo list to local storage
  function persistData(newList) {
    localStorage.setItem('todoList', JSON.stringify({ todoList: newList }));
  }

  // Function to handle adding a new todohsggs
  function handleTodo(newTodo) {
    const newTodoList = [...todoList, newTodo];
    persistData(newTodoList);
    setTodoList(newTodoList);
  }

  // Function to handle deleting a todo
  function handleDeleteTodo(index) {
    const newTodoList = todoList.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodoList(newTodoList);
  }

  // Function to handle editing a todo
  function handleEditTodo(index) {
    const valueToBeEdited = todoList[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  // useEffect to load the todo list from local storage when the component mounts
  useEffect(() => {
    if (!localStorage) return;

    let localTodoList = localStorage.getItem('todoList');
    if (!localTodoList) return;

    localTodoList = JSON.parse(localTodoList).todoList;
    setTodoList(localTodoList);
  }, []);

  return (
    <main>
      {/* Passing props to TodoInput component */}
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleTodo={handleTodo} />
      
      {/* Passing props to TodoList component */}
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todoList={todoList} />
    </main>
  );
}
