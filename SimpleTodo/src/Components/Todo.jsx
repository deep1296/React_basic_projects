import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState([]);

  const handleAdd = (text) => {
    const payload = {
      title: text,
      id: new Date().toDateString() + text,
      status: false
    };
    setTodo([...todo, payload]);
  };

  const handleStatus = (id) => {
    todo.forEach((ele) => {
      ele.id === id && (ele.status = !ele.status);
    });
    setTodo([...todo]);
  };

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      {todo.map((ele) => (
        <TodoList
          key={ele.id}
          item={ele.title}
          status={ele.status}
          id={ele.id}
          handleStatus={handleStatus}
        />
      ))}
    </div>
  );
}
