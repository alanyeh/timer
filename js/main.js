var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch();

toggleBtn.addEventListener('click', function() {
	if (watch.isOn) {
		watch.stop();
	} else {
		watch.start();
		console.log('test');
	}
});

resetBtn.addEventListener('click', function() {
	watch.reset();
});


console.log('hi');
