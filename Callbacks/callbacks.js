let navne = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]
const filtered = navne.filter(navn => navn.includes("a"))
//console.log(filtered)
//opg 2
//const reversed = navne.map(navn => navn.reverse())
//console.log(reversed)

//opg 3a
let numbers = [1, 3, 5, 10, 11];
let newNum = numbers.map((a ,b) => {
    if(typeof numbers[b + 1] === "number") return a + numbers[b + 1]
    else return a
})
//console.log(newNum)

//3b
const navneRow = navne.map(navn => 
    `<nav>
    <a href="">${navn}</a>
    </nav>`).join("")
  //console.log(navneRow)

//3c
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];
    let newArray = persons.map(x =>
    `<tr>
        <td>${x.name}</td>
        <td>${x.phone}</td>
    </tr>`)
    newArray.join("")
//console.log(newArray)  

//4a
var all= ["Hassan", "Peter", "Carla", "Boline"];
let singelString = all.join("#")
//console.log(singelString)

//4b
var tal = [2, 3, 67, 33].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  )
//console.log(tal)

//4c
let initialValue = 1
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}].reduce(
        (accumulator, currentValue) => accumulator + currentValue.x
        , initialValue
    )

    console.log(members)

    