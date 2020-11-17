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
