// Slice ()  method is a extraction od a string
// and return its as a new string
// without modification of the orignal string

let fullName = "md faiz";
let firstName ;
let lastName;

// firstName = fullName.slice(0 , 3);

// lastName = fullName.slice(4);



firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" " + 1));


console.log(firstName);
console.log(lastName);


