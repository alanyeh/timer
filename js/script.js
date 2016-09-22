function Stopwatch(elem) {
	var time = 0;
  var interval;
  var offset = new Date(Date.parse(new Date()) + 30 * 60 * 1000);

  function update() {
		if (this.isOn) {
			time += delta(); // added to time for each update
		}
		var formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
  }

  function delta() {
  	var now = Date.now();
    var timePassed = offset - now;
    offset = now; // calculates the new now number from about
    return timePassed;
  }

  function timeFormatter() {
		var timer = duration, minutes, seconds;
		setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
			}, 1000);

			return minutes + ':' + seconds;
  }



  this.isOn = false; //start with setting interveral to stop

  this.start = function() {
  	if (!this.isOn) {
	    interval = setInterval(update.bind(this), 10); //updates every 10 milliseconds
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

	this.increment = function() {
		if(!this.isOn) {
			time += delta();
			var incrementTime = new Date(time); // we can now get a bunch of date methods
			var minutes = (time.getMinutes().toString()) + 1000;
			elem.textContent = incrementTime;
			console.log(minutes);
		}
	};

  this.reset = function() {
		this.stop();
		time = 0;
		update();
	};
}
