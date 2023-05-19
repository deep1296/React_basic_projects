//add your js code here
const url = "https://jsonmock.hackerrank.com/api/football_matches"

let tbody = document.querySelector("tbody");
let yearFilter = document.querySelector("#year");
let team1Filter = document.querySelector("#team1");
let team2Filter = document.querySelector("#team2");

yearFilter.addEventListener("change", handleChange);
team1Filter.addEventListener("change", handleChange);
team2Filter.addEventListener("change", handleChange);
function handleChange (e) {
    let year = yearFilter.value;
    let team1 = team1Filter.value;
    let team2 = team2Filter.value;
    console.log(year, team1, team2);
    if(year && team1){
        fetchData(url,year,team1,"");
    }
    else if(year && team2){
        fetchData(url,year,"",team2);
    }
    else if(year){
        fetchData(url,year,"","");
    }
  
   

};

async function fetchData(url,year,team1,team2) {
    try {
        const res = team1 ? await fetch(`${url}?year=${year}&team1=${team1}`) :team2 ? await fetch(`${url}?year=${year}&team2=${team2}`): year ? await fetch(`${url}?year=${year}`) : await fetch(`${url}`);
        const data = await res.json();
        
        displayData(data.data);
    } catch (error) {
        console.error(error);
    }
}
fetchData(url,2011)

function displayData(data) {
    tbody.innerHTML = null;

   data = data.map((el,ind)=>{
        return `
        <tr>
            <td>${el.competition}</td>
            <td>${el.year}</td>
            <td>${el.round}</td>
            <td>${el.team1}</td>
            <td>${el.team2}</td>
            <td>${el.team1goals}</td>
            <td>${el.team2goals}</td>
          </tr>
        `
    });
    tbody.innerHTML = data.join("");
}