//using let
//3 strings 
let greeting = 'Hello World'
let greetingTwo = "Hello World"
let greetingThree = `Hello World`

console.log(greeting)

let numberOfPeople = 9


//using var

if(true) {
    var language = "JavaScript"    
}

console.log(language)


//using const
const classroom = 41
const name = "Seth"
const birthYear = 1994

//get user input
let response = prompt("What is your name?")

//alert(`Hello ${response}!`)

//DOM manipulation

document.getElementById("heading").innerHTML = `Hello, ${response}!`