import React from "react";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ListItemSecondaryAction } from "@material-ui/core";

function Todo({task, completed}) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;