import React, {useState} from 'react';
import './App.css';
import TodoStoreInput from './components/TodoStoreInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const storeTodo = input => {
    if(input.length > 0)
    {
      setTodos([...todos, input])
    }
    
  }

  const removeTodo = index => 
  {
    todos.splice(index, 1)
    setTodos(todos)
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
        removeTodo = {removeTodo}
      />
        
      <button
        onClick = {clearList}
      >
        Delete All
      </button>


    </div>
  );
}

export default App;
