Random = function () {
    //Todo: Make static
}

Random.prototype.getInt = function (lower, upper) {  // Inclusive of boundaries
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

Random.prototype.getInRange = function (lower, upper) {  // Exclusive of upper bound
    return lower + Math.random() * (upper - lower);
}
