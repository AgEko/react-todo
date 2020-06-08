import React, { useState } from 'react';
import List from '@material-ui/core/list'
import TextField from '@material-ui/core/TextField';

const TodoStoreInput = (props) => {
    const [input, setInput] = useState('')

    const handleChange = event => 
        setInput(event.target.value)

    const handleAddItem = () => 
    {
        // event.preventDefault();
        props.storeTodo(input)
        setInput('')
    }

    return (
        <form
            onSubmit = { event => {
                event.preventDefault();
                props.storeTodo(input);
                setInput('')
            }}
        >


            <TextField 
                placeholder = 'Enter new note' 
                
                onChange = {event => handleChange(event)} 
                value = {input}
            />
            <button
                onClick = {handleAddItem}
            >
                Add Todo
                
            </button>
        </form>
    )
}

export default TodoStoreInput;