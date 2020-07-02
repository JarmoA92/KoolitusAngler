console.log("javascript fail ühendatud jaa");

var year = 2020;    
var month = 8;
var day = 20;    
var hour = 12;
var minute = 00;
var second = 00;

var timeRemaining = document.getElementById("timeRemaining");

var date = new Date ();
var yearsRemaining = year - date.getFullYear;
var secondsRemaining = second - date.getSeconds;
if (secondsRemaining ) {
    
}

timeRemaining.innerHTML = yearsRemaining + secondsRemaining

//  pm peab kella tagurpidi tööle panema et ka tunnid ja päevad kahanevad