import useInputState from './hooks/useInputState';
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";

function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("");

    return (
      <Paper>
        <TextField value={value} onChange={handleChange}/>
      </Paper>
    );
  }
  
  export default TodoForm;
  