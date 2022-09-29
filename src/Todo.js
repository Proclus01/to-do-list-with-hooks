import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Edit}  from '@mui/icons-material';
import { ListItemSecondaryAction } from "@material-ui/core";

function Todo({task, completed, removeTodo, id, toggleTodo}) {
    const [isEditing, toggle] = useToggleState(false);

    return (
        <ListItem>
        {isEditing ? ( <EditTodoForm /> 
        ) : (
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                    <Delete />
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggle}>
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
            </>
        )}
        </ListItem>
    )
}

export default Todo;