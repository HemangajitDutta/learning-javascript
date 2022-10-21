// learning about variables

// There are 3 types of variables in javascript. They are as follows 

var // Before 2015 var was the only way to define a variable. The problem with var was that variable declaring var could be reassigned with another variable thus making it harder for debugging.
let 
///const
var a = "Rahul"
var a = "Hemango"
console.log(a)
const b = "CHERRY"
console.log(b)


document.getElementById("demo2").innerHTML=a
let sum= 1+2
console.log(sum)
let first = 23
let second = "23"
if (first === second) {
    console.log("true")
}else {console.log("false")}
// A javascript function is a block of code design to perform a particular task
let multiply= hemango(4,5)
function hemango( x,y) {
    return x * y
} 
console.log(multiply)
document.getElementById("demo3").innerHTML = toCelsius(40)
 function toCelsius(f) {
    return (5/9) * (f-32)
 }
