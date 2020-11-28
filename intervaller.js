Intervaller = function (func, period = 1000) {
	this.func = func;
	this.loopId = 0;
	this.period = period;
}

Intervaller.prototype.run = function () {
	this.loopId++;
	let me = this;
	this.loopHandle = setInterval(() => {
		me.func();
	}, me.period);
}

Intervaller.prototype.stop = function () {
	clearInterval(this.loopHandle);
}

Intervaller.prototype.setPeriod = function (p) {
	this.stop();
	this.period = p;
	this.run();
}

Object.defineProperties(Intervaller.prototype, {
	loopHandle: {
		get: function () { return this['runningLoop' + this.loopId]; },
		set: function (val) { this['runningLoop' + this.loopId] = val; }
	},
});
