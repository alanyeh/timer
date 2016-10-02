var display = document.getElementById('timer');
var min = 30;
var time = 60 * min;
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var plusBtn = document.getElementById('add');
var minusBtn = document.getElementById('minus');
var timerText = document.getElementById('timerText');
var isOn = false;


plusBtn.addEventListener('click', function() {
	if (isOn == false) {
		min++;
		time = 60 * min;
		min = min < 10 ? "0" + min : min; //add zero before number if less than 2
		updateDisplay();
	}
});

minusBtn.addEventListener('click', function() {
	if (min > 0) {
		if (isOn == false) {
			min--;
			time = 60 * min;
			min = min < 10 ? "0" + min : min; //add zero before number if less than 2
			updateDisplay();
		}
	}
});

// resetBtn.addEventListener('click', function() {
// });
//
// pauseBtn.addEventListener('click', function() {
// });

function startTimer(duration, display) {
		var t = duration;
		var test = setInterval(function () {
				minutes = parseInt(t / 60)
				seconds = parseInt(t % 60);

				minutes = minutes < 10 ? "0" + minutes : minutes; //add zero before number if less than 2
				seconds = seconds < 10 ? "0" + seconds : seconds; //add zero before if less than 2

				display.textContent = minutes + " : " + seconds;

				if (--t< 0) {
						t = duration;
				}
		}, 1000);
		isOn = true;
	}

	if (isOn = true) {
		clearInterval(test);
	}
}


function updateDisplay() {
	display.textContent = min + " : 00";
};

toggleBtn.addEventListener('click', function() {
	var toggleColor = document.getElementById('timerDot');
		if (!isOn) {
			startTimer(time, display);
			toggleColor.style.backgroundColor = '#F84982';
		}
		else {
			toggleColor.style.backgroundColor = '#189cc4';
		}
});
