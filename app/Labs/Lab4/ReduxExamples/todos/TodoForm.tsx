// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, updateTodo, setTodo } from "./todosReducer";
// import { ListGroupItem, Button, FormControl } from "react-bootstrap";

// export default function TodoForm(
// ) {
//   interface Todo {
//   id: string;
//   title: string;
// }

// const todos = useSelector((state: { todosReducer: { todos: Todo[] } }) => state.todosReducer.todos);
//   const dispatch = useDispatch();
//   return (
//     <ListGroupItem>
//       <Button onClick={() => dispatch(addTodo(todo))}
//               id="wd-add-todo-click"> Add </Button>
//       <Button onClick={() => dispatch(updateTodo(todo))}
//               id="wd-update-todo-click"> Update </Button>
//       <FormControl
//         defaultValue={Todo.title}
//         onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
//     </ListGroupItem>
// );}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";

interface Todo {
  id: string;
  title: string;
}

interface RootState {
  todosReducer: {
    todos: Todo[];
    todo: Todo;
  };
}

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  
  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
    </ListGroupItem>
  );
}