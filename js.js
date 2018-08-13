var arrayOfNames = ["PJ", "Jordan", "Caleb", "Maddi"];

var stringOfArray = "";
for(var i = 0; i < arrayOfNames.length; i++)
{
    stringOfArray += arrayOfNames[i] + " ,";
}

document.getElementById("something").textContent= stringOfArray;

var arrayOfNumbers = [12, 34, 32, 55, 7665];
var newNumbers = "";
var redoNumbers= "";

for(var x = 0; x<arrayOfNumbers.length; x++)
{
    newNumbers += arrayOfNumbers[x] + " ,";
}
document.getElementById("header2").innerHTML = newNumbers;

arrayOfNumbers.pop();
arrayOfNumbers.pop();

for(var c = 0; c<arrayOfNumbers.length; c++){
    redoNumbers += arrayOfNumbers[c] + ",";
}

document.getElementById("header3").innerHTML = redoNumbers;