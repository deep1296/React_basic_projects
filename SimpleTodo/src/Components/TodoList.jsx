export default function Todolist({ item, status, id, handleStatus }) {
    return (
      <div>
        <h3>
          {item}-{status ? "done" : "Not done"}
        </h3>
        <button onClick={() => handleStatus(id)}>toggle</button>
      </div>
    );
  }
  