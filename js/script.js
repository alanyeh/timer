var min = 30;
var time = 6000 * min;
var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
var timerInterval;
var resumeTime;

//DOM
var display = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var plusBtn = document.getElementById('add');
var minusBtn = document.getElementById('minus');
var timerText = document.getElementById('timerText');
var toggleColor = document.getElementById('timerDot');
var fiveBtn = document.getElementById('fiveBtn');
var tenBtn = document.getElementById('tenBtn');
var thirtyBtn = document.getElementById('thirtyBtn');

function select(item) {
	if (state == 0) {
    // get all 'a' elements
    var a = document.getElementsByClassName('timeBtn');
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('selected')
    }
    // add 'active' classs to the element that was clicked
    item.classList.add('selected');
	}
}

fiveBtn.addEventListener('click', function() {
	if (state == 0) {
		console.log('fiveBtn')
		min = 5;  //add zero before number if less than 2
		time = 6000 * min;
		min = min < 10 ? "0" + min : min; //add zero before number if less than 2
		updateDisplay();
	}
});

tenBtn.addEventListener('click', function() {
	if (state == 0) {
		min = 10;  //add zero before number if less than 2
		time = 6000 * min;
		updateDisplay();
	}
});

thirtyBtn.addEventListener('click', function() {
	if (state == 0) {
		min = 30;  //add zero before number if less than 2
		time = 6000 * min;
		updateDisplay();
	}
});

plusBtn.addEventListener('click', function() {
	if (state == 0) {
		min++;
		time = 6000 * min;
		updateDisplay();
	}
});

minusBtn.addEventListener('click', function() {
	if (min > 0) {
		if (state == 0) {
			min--;
			time = 6000 * min;
			min = min < 10 ? "0" + min : min; //add zero before number if less than 2
			updateDisplay();
		}
	}
});

function startTimer(duration, display) {
		var t = duration;
		if (state != 1) {
			timerInterval = setInterval(function () {
					minutes = parseInt(t / 6000);
					seconds = parseInt(Math.floor(t % 6000) / 100);
					milliseconds = parseInt(Math.floor(t % 60));

					minutes = minutes < 10 ? "0" + minutes : minutes; //add zero before number if less than 2
					seconds = seconds < 10 ? "0" + seconds : seconds; //add zero before if less than 2
					milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds; //add zero before if less than 2

					display.textContent = minutes + " : " + seconds + " : " + milliseconds;
					resumeTime = ((minutes * 6000) + (seconds * 100) + (milliseconds)) ; //revert time back to original
					state = 1;

					if (--t< 0) {
							t = duration;
					}
			}, 10);
			return resumeTime;
		}
}


function updateDisplay() {
	display.textContent = min + " : 00 : 00";
};

toggleBtn.addEventListener('click', function() {
		if (state == 0) {
			startTimer(time, display);
			toggleColor.style.backgroundColor = '#F84982';
		}
		else if(state == 1) {
			clearInterval(timerInterval);
			state = 2;
			toggleColor.style.backgroundColor = '#189cc4';
		}
		else if(state == 2) {
			startTimer(resumeTime, display);
			state = 3;
			toggleColor.style.backgroundColor = '#F84982';
		}
});

toggleBtn.addEventListener('dblclick', function(){
	clearInterval(timerInterval);

	time = 6000 * min;
	minutes = parseInt(time / 6000);
	seconds = parseInt((time % 6000) / 100);
	milliseconds = parseInt(time % 60);

	minutes = minutes < 10 ? "0" + minutes : minutes; //add zero before number if less than 2
	seconds = seconds < 10 ? "0" + seconds : seconds; //add zero before if less than 2
	milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds; //add zero before if less than 2

	display.textContent = minutes + " : " + seconds + " : " + milliseconds;

	state = 0;
	toggleColor.style.backgroundColor = '#F84982';
});
