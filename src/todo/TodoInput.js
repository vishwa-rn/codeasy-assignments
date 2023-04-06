import { useState } from "react";

export default function TodoInput({ todos, setTodos }) {
  console.log(todos);
  const [newTodo, setNewTodo] = useState("");

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleClick() {
    // todos
    // 1. I have to write ....
    // 2. I have to read ...

    // todos
    // 1. I have to write....
    // 2. I have to read.....
    // 3. I have to play cricket. - newTodo

    // todos = todos + newTodo
    // setTodos(todos + newTodo)
    // setTodos([...todos, newTodo])

    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <textarea value={newTodo} onChange={handleChange} />
      <br />
      <input type="button" value="Submit" onClick={handleClick} />
    </>
  );
}
