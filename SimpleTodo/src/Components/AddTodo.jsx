import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    !text ? alert("Please enter a text") :  handleAdd(text);
    
    setText("");
  };

  return (
    <div>
      <input
        required 
        placeholder="Enter todo"
        onChange={handlechange}
        type="text"
        value={text}
        
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
}
