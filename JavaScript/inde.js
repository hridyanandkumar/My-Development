var name = prompt("What is Your Name");
var firLetter = name.slice(0,1);
var upperFirLetter = firLetter.toUpperCase();
var restLetter = name.slice(1,name.length);
restLetter = restLetter.toLowerCase();
var finalName = (upperFirLetter + restLetter);
alert(finalName);