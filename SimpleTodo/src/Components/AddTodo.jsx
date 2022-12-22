import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        placeholder="Enter todo"
        onChange={handlechange}
        type="text"
        value={text}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
}
