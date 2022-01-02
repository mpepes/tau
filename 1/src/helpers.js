const _ = require('lodash')

function factorial(num) {
    if (num === 0) {
        return 1
    }
    
    return num * factorial(num > 0 ? num - 1 : num + 1)
}

function checkArraysEquality(arr, arr2) {
    return _.isEqual(arr, arr2)
}

function getValuesGreaterThan(arr, num) {
    return arr.filter(n => n > num)
}


module.exports = {
    factorial,
    checkArraysEquality,
    getValuesGreaterThan,
}
