var number1 = Math.floor(Math.random() * 6) + 1;

var randomDiceeImage1 = "images/dice" + number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceeImage1);



var number2 = Math.floor(Math.random() * 6) + 1;

var randomDiceeImage2 = "images/dice" + number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceeImage2);

if(number1 > number2){
    document.querySelector("h1").innerHTML= "Hridyanand win";
}else if(number1 < number2){
    document.querySelector("h1").innerHTML = "Anurag win";
}else{
    document.querySelector("h1").innerHTML = "draw";
}

