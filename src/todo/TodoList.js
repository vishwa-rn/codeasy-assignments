import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([
    "I have to write a document tonight on AI",
    "I have to read two pages from Challenger book",
  ]);

  function renderTodo(todo) {
    return <TodoItem todo={todo} />;
  }

  console.log(todos);
  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <h1>Todo list</h1>
      {todos.map(renderTodo)}
    </>
  );
}
