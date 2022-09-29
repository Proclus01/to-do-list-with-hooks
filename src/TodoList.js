import React from "react";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo, i) => (
          <>
            <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                deleteTodo={todo.deleteTodo}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
            />
            {i < props.todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
