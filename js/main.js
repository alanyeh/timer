var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var plusBtn = document.getElementById('add');

var watch = new Stopwatch(timer);
var time = new Date((watch)); // we can now get a bunch of date methods

timer.textContent = time;

toggleBtn.addEventListener('click', function() {
	if (watch.isOn) {
		watch.stop();
		// toggleBtn.textContent = 'Start';
	} else {
		watch.start();
		// toggleBtn.textContent = 'Stop';
	}
});

// plusBtn.addEventListener('click', function() {
// 	if (watch.isOn) {
// 		watch.reset();
// 	} else {
// 		watch.increment();
// 		console.log('test');
//
// 	}
// });


// resetBtn.addEventListener('click', function() {
// 	watch.reset();
// });


// console.log('hi');
