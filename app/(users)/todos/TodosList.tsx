import React from "react";
import { Todo } from "../../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  //timeout for random numbers from 1 to 5 sec
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((res) => setTimeout(res, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  // console.log(todos);
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          {" "}
          <Link href={`/todos/${todo.id}`}>Todo: {todo.title} </Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
