import Button from "./Button";
import "./components.css";

export default function Card(props) {
    // console.log(props);
    const {name,designation,avatar,skills} = props;
 
    
  return (
    <>
      <div id="container" >
        <div id="details">
          <div id="name&Designation">
            <span id="name">{name}</span>
            <Button
              text="Follow !"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                width: "80px",
                float  :"center",
                borderRadius:"10%"
              }}
            />
            <br />
            <h3>{designation}</h3><br />
          </div>
          <div id="skills">{skills.map((ele)=>(
            <img src={ele} alt="icon" />
          ))}</div>
        </div>
        <div id="avtar">
            <img id="image" src={avatar} alt="avatar"/>
        </div>
      </div>
    </>
  );
}
