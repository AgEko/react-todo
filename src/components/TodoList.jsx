import React, {useState} from 'react';

function TodoList(props)
{
    return (
        <div>
            {props.todosList.map((todo, index) =>(
            <p key = {index}> {todo}
            <button 
            onClick = {() => {
                props.removeTodo(index)
            }}
            
            >
                Remove
            </button>
            <button>
                Completesed
            </button>
            </p>
            ))}
        </div>
    )
}

export default TodoList;
