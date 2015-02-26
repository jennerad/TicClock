// main function
// $(document).ready(function(){
//     startTime();
//     //event handler?
//     // $('#start').on('click', newGame);

// });
var hClass;
var mClass;
var sClass;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
        //change to 12 hour clock
    h = twelveHourClock(h);
        //add leading 0 if needed for < 10
    h = addZeroToTime(h);
    m = addZeroToTime(m);
    s = addZeroToTime(s);
    hClass = "time" + h;
    mClass = "time" + m;
    sClass = "time" + s;

    if (s == 0) {
        s = "60";
        sClass = "time60";
    };
        console.log(s);
        console.log(sClass);
    document.getElementById('timeHours').className = hClass;
    document.getElementById('timeMinutes').className = mClass;
    document.getElementById('timeSeconds').className = sClass;
    var t = setTimeout(function(){startTime()},500);
}

function addZeroToTime(i) {
    if (i<10) {
        i = "0" + i
    }; 
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {
        i = i - 12;
    };
    return i
}







//replace hour/minutes/seconds with sprite

//display sprite in html


// function update() {
    // get current time
    //get hour
    //get minutes
    //get seconds
