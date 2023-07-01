// program to find the hypotenuse of the triangle

let a;
let b;
let c;

// a = window.prompt("Entre the side a");
// a = Number(a);

// b = window.prompt("Entre the side b");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b , 2));

// console.log("side c is " , c);


// now writing the same code with the help of the html tags

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b , 2));

    document.getElementById("cLAvel").innerHTML = " side of c is " + c ;

}