//add your js code here
const url = "https://jsonmock.hackerrank.com/api/football_matches"
function moveToFilter() {
    window.location.href = "filter.html";
}
let tbody = document.querySelector("tbody");
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let page = 1;

async function fetchData(page=1,url) {
    try {
        const res = await fetch(`${url}?page=${page}`);
        const data = await res.json();
        console.log(data);
        displayData(data.data);
    } catch (error) {
        console.error(error);
    }
}
fetchData(page,url)

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

prev.addEventListener("click",function(e) {
    if(page==1 || page < 1){
        return
    }
    page--;
    fetchData(page,url);

});

next.addEventListener("click",function(e) {
    page++;
    fetchData(page,url);
});