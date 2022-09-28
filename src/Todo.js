import React from "react";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Edit}  from '@mui/icons-material';
import { ListItemSecondaryAction } from "@material-ui/core";

function Todo({task, completed, removeTodo, id, toggleTodo}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <Delete />
                </IconButton>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;