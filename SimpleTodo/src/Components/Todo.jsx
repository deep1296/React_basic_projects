import { useState } from "react";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";

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
      <Addtodo handleAdd={handleAdd} />
      {todo.map((ele) => (
        <Todolist
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
