//switch = statement that examines a value
// for a match againts many case clauses
// more efficient that mamy " else if" satements

let grade = 65;

switch(true){
    case grade >= 90:
    console.log("you did great!");
    break;

    case grade >= 70:
        console.log("average");
        break;

     case grade == 65:
        console.log("passed");
        break;   
    
}