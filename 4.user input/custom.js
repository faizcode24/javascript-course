//How to accept user input

// Easy way witht the Window prompt

// let username = window.prompt("Entre your name ");
// console.log(username);

// Difficult way with the html and best used in the market


let username;

document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("mytext").ariaValueMax;
    console.log(username);
    document.getElementById("'mylabel").innerHTML ="hello " + username;
}