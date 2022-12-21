
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card';

function App() {
  
  const users = [
    {
      id :"1",
      name : "John wick",
      designation:"Software developer",
      avatar : "https://avatars.githubusercontent.com/u/1024025?v=4",
      skills : [
      "https://img.shields.io/badge/node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white",
      "https://img.shields.io/badge/express-000000.svg?style=for-the-badge&logo=express&logoColor=white",
      "https://img.shields.io/badge/redis-DC382D.svg?style=for-the-badge&logo=redis&logoColor=white",
      "https://img.shields.io/badge/mongodb-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white"
      ]

    },
    {
      id :"2",
      name : "Albert",
      designation:"React developer",
      avatar : "https://avatars.githubusercontent.com/u/1024025?v=4",
      skills : [
      "https://img.shields.io/badge/reactjs-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/redux-764ABC.svg?style=for-the-badge&logo=redux&logoColor=white",
      "https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
      "https://img.shields.io/badge/html-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      "https://img.shields.io/badge/css-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      "https://img.shields.io/badge/babel-F9DC3E.svg?style=for-the-badge&logo=babel&logoColor=black",
      "https://img.shields.io/badge/webpack-8DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
      ]
    }
  ];

  const cards = users.map(user =>(
    <Card 
      key = {user.id} 
      name = {user.name}
      designation = {user.designation}
      avatar = {user.avatar}
      skills = {user.skills}
      
    />
  ))
  console.log(cards);

  return (
    <div className="App">
      {cards}
    </div>
  )
}

export default App




//     <img src=
//       alt="nodejs"/> 
//   </a>
//   <a href="https://expressjs.com" target="_blank">
//     <img src=
//       alt="express" />
// </p>
// <h3 align="center">Database</h3>
// <p align="center">
//   <a href="https://redis.io" target="_blank"> 
//     <img src=
//       alt="redis"/>
//   </a>
//   <a href="https://www.mongodb.com/" target="_blank"> 
//     <img src=
//       alt="mongodb"/> 
//   </a> 
// </p>
