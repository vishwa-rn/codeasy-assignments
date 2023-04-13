import axios from "axios";
import { useEffect, useState } from "react";
import api from "./api";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     async function fetchTodos() {
  //       await axios
  //         .get("https://jsonplaceholder.typicode.com/todos")
  //         .then((response) => {
  //           //   console.log(response);
  //           setTodos(response.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //     fetchTodos();
  //   }, []);

  useEffect(() => {
    async function deleteTodos() {
      try {
        const response = await api.delete("todos");
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    deleteTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo.title}</li>;
      })}
    </ul>
  );
}
