

document.getElementById("myButton").onclick = function(){

    const mycheckBox = document.getElementById("myCheckBox");

    const visaBtn = document.getElementById("visaBtn");

    const masterCard = document.getElementById("masterCard");

    const paypal = document.getElementById("paypal");


    if(mycheckBox.checked){
        console.log("you are subscribed");
    }

    else{
        console.log("you are not suscribe");
    }

    if(visaBtn.checked){
        console.log("you are using the visa card for the payment ");
    }


    else if(masterCard.checked){
        console.log("you are using the master card for the payment");
    }

    else if(paypal.checked){
        console.log("you are using the paypall card for the payment");
    }


   else{
    console.log("you mudt select a payment type");
   }

}