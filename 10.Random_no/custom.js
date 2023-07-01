let x;
let y;
let z;

document.getElementById("buttonroll").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;


    document.getElementById("first").innerHTML = x;
    document.getElementById("second").innerHTML = y;
    document.getElementById("third").innerHTML = z;
}