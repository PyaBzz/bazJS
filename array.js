Array.prototype.takeFirstOut = function (elementCount = 1) {
    return this.splice(0, elementCount);
}

Array.prototype.takeLastOut = function (elementCount = 1) {
    return this.splice(-elementCount, elementCount);
}

Array.prototype.addToFront = function (...params) {
    for (let i = params.length - 1; i >= 0; i--)
        this.unshift(params[i]);
}

Array.prototype.clone = function (fromIndex = 0, elementCount) {
    if (isUndefined(elementCount))
        elementCount = this.length;
    return this.slice(fromIndex, elementCount);
}

Array.prototype.doToAll = function (action) {
    this.forEach(element => action(element));
}

Array.prototype.doToAllWithTimeGap = function (action, timeStep, callback) {
    let i = 0;
    let me = this;
    const loopHandle = setInterval(function () { //Todo: Could remove the first delay
        let element = me[i];
        action(element);
        i++;
        if (i === me.length) {
            clearInterval(loopHandle);
            ifFunctionRun(callback);
        }
    }, timeStep);
}

Array.prototype.discardElements = function () {
    while (this.hasAny)
        this.takeFirstOut();
}

Array.prototype.getWithHighest = function (valueGetter, elementCount = 1) { //Todo: Use getMax to improve performance
    let temp = this.clone();
    temp.sortDescending(valueGetter);
    return temp.takeFirstOut(elementCount);
}

Array.prototype.getMax = function () { //O(n) faster than getWithHighest
    let index = this.getIndexOfMax();
    return this[index];
}

Array.prototype.getIndexOfMax = function () { //Todo: Use valueGetter
    let index = 0;
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) {
            index = i;
            max = this[i];
        }
    }
    return index;
}

Array.prototype.sortAscending = function (valueGetter) {
    this.sort((a, b) => valueGetter(a) - valueGetter(b));
}

Array.prototype.sortDescending = function (valueGetter) {
    this.sort((a, b) => valueGetter(b) - valueGetter(a));
}

Array.prototype.pickRandom = function (batchSize = 1) {
    if (batchSize === 1) {
        let randomIndex = Math.floor(Math.random() * this.length);
        return this[randomIndex];
    }
    else {
        let clone = this.clone();
        clone.shuffle();
        return clone.slice(0, batchSize);
    }
}

Array.prototype.shuffle = function (batchSize = 1) {
    let rand = new Random();
    for (let i = 1; i < this.length; i++) {
        let ind = rand.getInt(0, i - 1);
        let temp = this[ind];
        this[ind] = this[i];
        this[i] = temp;
    }
}

Object.defineProperties(Array.prototype, {
    last: { get: function () { return this[this.length - 1] } },
    hasAny: { get: function () { return Boolean(this.length) } },
});
