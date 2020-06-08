import React from 'react';
import BlockIcon from '@material-ui/icons/Block'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText, ListItemSecondaryAction } from '@material-ui/core';


function TodoList(props)
{
    return (
        <List>

            {props.todosList.map((todo, index) => 
            
            (
                    
            <ListItem 
                key = {index} 
                dense 
                button
            >
                <Checkbox 
                    value= {index} 
                    onClick= { props.handleClick } 
                    tabIndex={-1} 
                    checked={ todo.isChecked }/>
                <ListItemText primary = { todo.name } />
                
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label = "BlockIcon" 
                        onClick = {() => {
                            props.removeTodo(index)
                        }}
                    >
                        <BlockIcon />
                    </IconButton>

                </ListItemSecondaryAction>
            </ListItem>
            ))}
           
        </List>
    )
}

export default TodoList;


// <List>
//             {props.todosList.map((todo, index) =>(
//             <p key = {index}> {todo}
//             <IconButton
//             aria-label = "BlockIcon" 
//             onClick = {() => {
//                 props.removeTodo(index)
//             }}
            
//             />
                
            
//             <button>
//                 Completesed
//             </button>
//             </p>
//             ))}
//         </List>