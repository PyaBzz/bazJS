Array.prototype.takeFirstOut = function (elementCount = 1) {
    return this.splice(0, elementCount);
}

Array.prototype.takeLastOut = function (elementCount = 1) {
    return this.splice(-elementCount, elementCount);
}

Array.prototype.addToFront = function (...args) {
    for (let i = arguments.length - 1; i >= 0; i--)
        this.unshift(arguments[i]);
}

Array.prototype.clone = function (i = 0, elementCount) {
    if (isUndefined(elementCount))
        elementCount = this.length;
    return this.slice(i, elementCount);
}

Array.prototype.doToAll = function (action) {
    this.forEach(element => action(element));
}

Array.prototype.doToAllWithTimeGap = function (action, timeStep) {
    let i = 0;
    let me = this;
    const loopHandle = setInterval(function () {
        let element = me[i];
        action(element);
        i++;
        if (i === me.length)
            clearInterval(loopHandle);
    }, timeStep);
}

Array.prototype.discardElements = function () {
    while (this.hasAny)
        this.takeFirstOut();
}

Array.prototype.getMax = function () {
    let index = this.getIndexOfMax();
    return this[index];
}

Array.prototype.getWithHighest = function (valueGetter, elementCount = 1) {
    let temp = this.clone();
    temp.sortDescending(valueGetter);
    return temp.clone(0, elementCount);
}

Array.prototype.getIndexOfMax = function () {
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
        let rand = new Random();
        for (let i = 1; i < clone.length; i++) {
            let ind = rand.getInt(0, i - 1);
            let temp = clone[ind];
            clone[ind] = clone[i];
            clone[i] = temp;
        }
        return clone.slice(0, batchSize);
    }
}

Object.defineProperties(Array.prototype, {
    last: { get: function () { return this[this.length - 1] } },
    hasAny: { get: function () { return Boolean(this.length) } },
});
