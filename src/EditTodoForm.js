import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

function EditTodoForm({ id, editTodo, task, toggleEdit }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
    }}>
        <TextField
        margin="normal"
        valie={value}
        onChange={handleChange}
        fullwidth="true"
        />
    </form>
  );
}

export default EditTodoForm;
