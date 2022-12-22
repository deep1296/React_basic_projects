export default function Todolist({ dateTime,item, status, id, handleStatus, handleDelete }) {
    const style = {
        display : "flex",
        justifyContent : "space-between",
        gap:"20px",
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
    }
    const btnStyle = {
        borderColor : "tomato",
        width:"80px",
        height:"35px",
        padding: "5px",
        margin: "17px"
    }
    return (
 
        <div style={style}>
      <div>
        <h3>
          {item}    -    {status ? "done" : "Not done"}
        </h3>
      </div>
      <div>
        <button style={btnStyle} onClick={() => handleStatus(id)}>toggle</button>
        <button style={btnStyle} onClick={() => handleDelete(id)}>Delete</button>
        <button>{dateTime}</button>
      </div>
    </div>

  );
}
