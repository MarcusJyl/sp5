import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"
import userFacde from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makejokeList(){
const jokes = jokeFacade.getJokes()
let jokeList = jokes.map(joke => `<li>${joke}</li>`);
const itemsAsString = jokeList.join("")
document.getElementById("jokes").innerHTML = itemsAsString;
}

function getJokeId(){
let getId = document.getElementById("getById").value;
let jokfacade = jokeFacade.getJokeById(getId);
document.getElementById("gottenJoke").innerHTML = jokfacade
}
document.getElementById("btn").addEventListener("click", getJokeId);

function insertJoke(){
  let newJoke = document.getElementById("newJoke").value;
  let insertJoke = jokeFacade.addJoke(newJoke);
  makejokeList();
}
document.getElementById("btnIn").addEventListener("click", insertJoke);

/* JS For Exercise-2 below */
function fetchQuote(){
  fetch("https://studypoints.info/jokes/api/jokes/period/hour").then(res => res.json()).then(data =>{
    let fetchedQuote = data.joke
    console.log(data.joke)
  document.getElementById("input").innerHTML = fetchedQuote
  })
  
}

document.getElementById("button").addEventListener("click", fetchQuote);
setInterval(fetchQuote, 3600000)


/* JS For Exercise-3 below */
makeTable()
function makeTable(){
userFacade.getUsers()
.then(users => {
  const userRows = users.map(user => 
    `<tr>
    <td>${user.id}</td>
    <td>${user.age}</td>
    <td>${user.name}</td>
    <td>${user.gender}</td>
    <td>${user.email}</td>
   </tr>`) 
  const userRowsAsString = userRows.join("")
  document.getElementById("allUserRows").innerHTML = userRowsAsString
})
}

document.getElementById("submit").addEventListener("click", (event) =>{
  event.preventDefault();
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;

  const newUser = {
    age,
    name,
    gender,
    email
  }
  userFacade.addUser(newUser)
  .then(makeTable())
  .catch(err =>{
    if(err.status){
      err.fullError.then(e=> alert(e.msg))
    }
    else{console.log("Network error"); }
});
});


  document.getElementById("findBtn").addEventListener("click", (event) =>{
    event.preventDefault();
    let userId = document.getElementById("user").value;
    let dataInput = document.getElementById("findUser")
    
    userFacade.getUser(userId)
    .then(data =>{
      dataInput.innerHTML = data.name;
    })
  });
    
  document.getElementById("deleteUserbtn").addEventListener("click", (event) =>{
    event.preventDefault();
    let deleteUserId = document.getElementById("deleteUser").value;

    userFacade.deleteUsers(deleteUserId)
    .then(makeTable)
});

document.getElementById("editsubmit").addEventListener("click", (event) =>{
  event.preventDefault()
  let id = document.getElementById("edituserID").value;
  userFacade.getUser(id).then(data => {
    let name = data.name
    let age = data.age
    let gender = data.gender
    let email = data.email
    let person = {id, name, age, gender, email}
    let newName = document.getElementById("editname").value;
    let newAge = document.getElementById("editage").value;
    let newGender = document.getElementById("editgender").value;
    let newEmail = document.getElementById("editemail").value;
    //tjekker om inputfeltet er tomt, og sætter den nye ind hvis det ikk er    
    if(newName === false){
      person.name = newName
    }if(newAge === false){
      person.age = newAge
    }if(newGender === false)
      person.gender = newGender
    if(newEmail === false){
      person.email = newEmail
  }
  console.log(person)
  userFacade.editUsers(person)    
  })
})

  



/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



