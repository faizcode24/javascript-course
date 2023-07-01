// Const = it is a variable that can not be chaged
// once decelared it can not be changed

// write a program to calculate the circumfarence of a circle with the const variable

const PI = 3.14;
let radius;

let circumfarence ;

radius = window.prompt("Entre the radius of the circle");
radius = Number(radius);

circumfarence = 2 * PI * radius;

console.log("The circumfarence of the circle is " , circumfarence , "is");
