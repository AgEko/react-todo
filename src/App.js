import React, {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TodoStoreInput from './components/TodoStoreInput'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  function handleClick(event)
  {
    let TodoItem = todos[event.target.value]
    TodoItem.isChecked = !TodoItem.isChecked
    console.log(event.target.value)
    
    todos[event.target.value]= TodoItem 
    setTodos(todos)
    console.log(TodoItem)
  }


  const storeTodo = input => {
    const trimText = input.trim();

    if(trimText.length > 0)
    {
      let todoItem = new TodoItem();
      todoItem.name = trimText;
      todoItem.isChecked = false;
      console.log(todoItem)

      setTodos([...todos, todoItem])
    }
    
  }

  const removeTodo = index => 
  {
    let filtered = todos.filter((val, ind) => ind !== index); 
    setTodos(filtered);
    console.log(todos)
  }

  const clearList = () =>
  {
    setTodos([])
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Todo App
        </p>
      </header>

      <TodoStoreInput 
        storeTodo = {storeTodo}
      />

      <TodoList 
        todosList = {todos}
        handleClick = {handleClick}
        removeTodo = {removeTodo}
      />
        
      <Button
      todos = {todos}
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
      onClick={clearList}
    >
      Delete All
    </Button>


    </div>
  );
}

export default App;
