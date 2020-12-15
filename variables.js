isDefined = function (variable) {
    return typeof variable !== 'undefined';
}

isUndefined = function (variable) {
    return typeof variable === 'undefined';
}

isFunction = function (variable) {
    return typeof variable === 'function';
}

ifFunctionRun = function (variable, ...params) {
    if (isFunction(variable))
        variable(...params);
}

copyProperties = function (from, to) {
    for (let key in from)
        to[key] = from[key];
}

getPropKeyByIndex = function (obj, i) {
    return Object.keys(obj)[i];
}
