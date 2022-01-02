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

class User {
    constructor(gender, age) {
        this.gender = gender
        this.age = age
    }
    
    getGender() {
        return this.gender
    }
    
    setGender(gender) {
        this.gender = gender
    }
    
    getAge() {
        return this.age
    }
    
    setAge(age) {
        this.age = age
    }
    
    whoIsUser() {
        switch(this.getGender()) {
            case 'male':
                return this.age > 16 ? 'man' : 'boy';
            case 'female':
                return this.age > 16 ? 'woman' : 'girl';
            default:
                return 'Not recognized'
        }
    }
}


module.exports = {
    factorial,
    checkArraysEquality,
    getValuesGreaterThan,
    User,
}
