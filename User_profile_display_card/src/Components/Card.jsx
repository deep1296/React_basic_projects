import Button from "./Button";

export default function Card(props) {
    // console.log(props);
    const {name,designation,avatar,skills} = props;
    const style = {
        display: 'flex',
        gap:"20px",
        padding:"1rem",
        border: "1 px solid red",
        width: "90%",
        height: "200px"
    }
    const image = {
        width: "100px",
        height : "100px",
        borderRadius: "50%"
    }
    
  return (
    <>
      <div id="container" style={style}>
        <div id="details">
          <div id="name&Designation">
            <span>{name}</span>
            <Button
              text="Follow !"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem",
                width: "80px",
              }}
            />
            <h3>{designation}</h3>
          </div>
          <div id="skills">{skills.map((ele)=>(
            <img src={ele} alt="icon" />
          ))}</div>
        </div>
        <div id="avtar">
            <img src={avatar} alt="avatar" style={image}/>
        </div>
      </div>
    </>
  );
}
