import axios from "axios";
import { useEffect, useState } from "react";
import api from "./api";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      console.log("Request was sent with this config.");

      // get data from this url.
      // once you get the data
      // continue with next statements.

      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          //   console.log(response);
          setTodos(response.data);
          console.log("Response was received with this response", response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Request was sent with this config.");
    }
    fetchTodos();
  }, []);

  useEffect(() => {
    async function fetchTodos() {
      try {
        // const response = await api.get("todos");
        const response = await api.post("todos", {
          title: "New Todo",
          userId: 12,
          completed: false,
          id: 201,
        });
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo.title}</li>;
      })}
    </ul>
  );
}
