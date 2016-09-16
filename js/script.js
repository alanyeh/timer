function Stopwatch(elem) {
	var time = 0;
  var interval;
  var offset;

  function update() {
  	time += delta(); // added to time for each update
		var formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
  }

  function delta() {
  	var now = Date.now();
    var timePassed = now - offset;
    offset = now; // calculates the new now number from above
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
		var time = new Date(timeInMilliseconds); // we can now get a bunch of date methods
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
			seconds = '0' + milliseconds;
		}

		return minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  this.isOn = false; //start with setting interveral to stop

  this.start = function() {
  	if (!this.isOn) {
	    interview = setInterval(update, 10); //updates every 10 milliseconds
    	offset = Date.now();
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

  this.reset = function() {};
	time = 0;
}
