import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState([]);

  const handleAdd = (text) => {
    const payload = {
      title: text,
      id: new Date().toDateString() + text,
      status: false,
      date : new Date().toLocaleString()
    };
    setTodo([...todo, payload]);
  };
  console.log(todo);
  const handleStatus = (id) => {
    // todo.forEach((ele) => {
    //   ele.id === id && (ele.status = !ele.status);
    // });

    const newTodo = todo.map((ele)=>{
      if(ele.id === id) {
        return{
          ...ele,
          status : !ele.status
        }

      }
      else{
        return ele;
      }
    })
    setTodo(newTodo);
  };

  const handleDelete = (id) => {
    const arr = todo.filter((item)=>(
        item.id !== id
    ))
    setTodo(arr)
  }

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      {todo.map((ele) => (
        <TodoList
          key={ele.id}
          item={ele.title}
          status={ele.status}
          id={ele.id}
          dateTime={ele.date}
          handleStatus={handleStatus}
          handleDelete = {handleDelete}
        />
      ))}
    </div>
  );
}
