function Stopwatch(elem) {
	var time = 0;
  var interval;
  var offset;

  function update() {
		if (this.isOn) {
			time += delta(); // added to time for each update
		}
		var formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
		console.log(formattedTime);
  }

  function delta() {
  	var now = Date.now();
		// console.log(now);
    var timePassed = offset - now;
    offset = now; // calculates the new now number from about
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
		var time = new Date((timeInMilliseconds)); // we can now get a bunch of date methods
		// console.log(time);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		// Keep format of timer

		if (minutes.length < 2 ) {
			minutes = '0' + minutes;
		}

		if (seconds.length < 2 ) {
			seconds = '0' + seconds;
		}

		while (milliseconds.length < 3) {
			milliseconds = '0' + milliseconds;
		}

		return minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  this.isOn = false; //start with setting interveral to stop

  this.start = function() {
  	if (!this.isOn) {
	    interval = setInterval(update.bind(this), 10); //updates every 10 milliseconds
    	offset = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
    	this.isOn = true;
    }
  };

  this.stop = function() {
  	if(this.isOn) {
    	clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function() {
		this.stop();
		time = 0;
		update();
	};
}
