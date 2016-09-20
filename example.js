/* Developed by Sandra Flato */
/* To Do
  graphic timer
     */

/* Global variables */
var defaultworktime = 25;
var defaultbreaktime = 5;
var worktime = defaultworktime;
var breaktime = defaultbreaktime;
var min;
var sec;
var intervalID;
var workflag;
var bell = new Audio("http://soundbible.com/grab.php?id=1599&type=wav");

/* Display countdown timer for work*/
function showwork() {
  workflag = true;
  min = worktime;
  sec = min * 60;
  $("#counter").html(min + ":00");
  $("#segment").html("Work");
}

/* On startup set default times*/
$(document).ready(function() {
  showwork();
  $("#work").html(worktime);
  $("#break").html(breaktime);
});

/* when start button clicked, start clock*/
$("#start").click(function() {
   clearInterval(intervalID);
  if (sec > 0) {
  intervalID = setInterval(pomodoro, 1000);
}});

/* when stop button clicked, stop clock */
$("#stop").click(function() {
  clearInterval(intervalID);
});

/* when reset button clicked, rest timers to last setting */
$("#reset").click(function() {
  clearInterval(intervalID);
  showwork();
});

/* when + button by work hit, increase work time and display*/
$("#increasework").click(function() {
  worktime++;
  showwork();
  $("#work").html(min);
});

/* when - button by work hit, decrease work time and display */
$("#decreasework").click(function() {
 if (sec > 0) {
  worktime--;
  showwork();
  $("#work").html(min);
}});

/* when + button by break hit, increase break time and display */
$("#increasebreak").click(function() {
  breaktime++;
  $("#break").html(breaktime);
});

/* when - button by break hit, decrease break time and display */
$("#decreasebreak").click(function() {
 if (breaktime > 0) {
  breaktime--;
  $("#break").html(breaktime);
}});

/* countdown clock */
function pomodoro() {
  var showmin = Math.floor(sec / 60);
  var showsec = (sec % 60);
  /* if seconds less than 10, add a leading zero */
  if (showsec > 9) {
    $("#counter").html(showmin + ":" + showsec);
  } else {
      $("#counter").html(showmin + ":0" + showsec);
  }
  sec--;
  /* when time runs out - stop clock, ring bell */
  if (sec === -1) {
    clearInterval(intervalID);
    bell.play();
    /* automatically switch between work and break */
    if (workflag) {
      workflag = false;
      min = breaktime;
      $("#counter").html(min + ":00");
      $("#segment").html("Break");
    } else {
      showwork();
    }
    /* start clock */
      sec = min * 60;
      intervalID = setInterval(pomodoro, 1000);
  }
}
