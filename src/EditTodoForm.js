import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

function EditTodoForm() {
  const [value, handleChange, reset] = useInputState("");

  return (
    <TextField
      margin="normal"
      valie={value}
      onChange={handleChange}
      fullwidth
    />
  );
}

export default EditTodoForm;
