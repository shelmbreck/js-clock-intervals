var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
var sDegrees = 0;
var mDegrees = 0;
var hDegrees = 0;

// Current Time and Date - I tried 🤷
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


// 360/60 = 6 
setInterval (function() {
    secondHand.style.transform = "rotate(" + sDegrees + "deg)";
    sDegrees = sDegrees + 6;
}, 1000);

setInterval (function() {
    minuteHand.style.transform = "rotate(" + mDegrees + "deg)";
    mDegrees = mDegrees + 6;
}, 60000);

setInterval (function() {
    hourHand.style.transform = "rotate(" + hDegrees + "deg)";
    hDegrees = hDegrees + 6;
}, 3600000);


