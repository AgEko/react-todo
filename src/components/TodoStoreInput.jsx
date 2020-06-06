import React, { useState } from 'react';
import List from '@material-ui/core/list'

const TodoStoreInput = (props) => {
    const [input, setInput] = useState('')

    const handleChange = event => setInput(event.target.value)

    const handleAddItem = () => {
        // event.preventDefault();
        props.storeTodo(input)
        setInput('')
    }

    return (
        <div>
            <input 
                placeholder = 'Enter new note' 
                value = {input}
                onChange = {event => handleChange(event)} 
            />
            <button
                onClick = {handleAddItem}
            >
                Add Todo
                
            </button>
        </div>
    )
}

export default TodoStoreInput;