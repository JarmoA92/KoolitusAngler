console.log("javascript töötab");

//document - käib läbi HMTL 
document.getElementById("hi");

console.log(document.getElementById("hi"))
// eraldi muutuja  var-variable
var hiHtmlElement = document.getElementById("hi");

console.log(hiHtmlElement)

hiHtmlElement.innerHTML = "Tere tulemast";

document.getElementById("clock");

console.log(document.getElementById("clock"))

var clockHtmlElement = document.getElementById("clock");


//  massiiv ehk list. elemendid 0-st 
var estonianMonths = ["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
var estonianWeekDays = ["Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev","Pühapäev"];

console.log(estonianMonths[6]);
console.log(estonianWeekDays[3]);


updateClock();
setInterval(updateClock, 1000);

function updateClock(){ 
    var date = new Date();
clockHtmlElement.innerHTML =date

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var minute = date.getMinutes();

var secound = date.getSeconds();
var dayOfWeek = date.getDay()-1;
var hour = date.getHours();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(minute);
// console.log(secound);
// console.log(dayofweek)

clockHtmlElement.innerHTML = year + "." + estonianMonths[month] + "." +  day + "   " + hour + ":" + minute + ":" + secound + "     ", dayOfWeek[estonianWeekDays];

}

// contral ä välja kommenteerimiseks

