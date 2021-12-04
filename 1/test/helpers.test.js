const { expect, it } = require("@jest/globals");
const {
    factorial,
    checkArraysEquality,
    getValuesGreaterThan,
} = require("../src/helpers");


describe('factorial', () => {
    it('counts factorial properly', () => {
        const result = factorial(3)
        expect(result).toEqual(6)
    })

    it('counts factorial properly', () => {
        const result = factorial(0)
        expect(result).toEqual(1)
    })

    it('counts factorial properly for negative even numbers', () => {
        const result = factorial(-2)
        expect(result).toEqual(2)
    })

    it('counts factorial properly for negative odd numbers', () => {
        const result = factorial(-3)
        expect(result).toEqual(-6)
    })
})

describe('checkArraysEquality', () => {
    it('returns true if two arrays are equal', () => {
        const arr = [1, 2]
        const arr2 = [1, 2]
        const result = checkArraysEquality(arr, arr2)

        expect(result).toBeTruthy
    })

    it('returns false if two arrays are not equal', () => {
        const arr = [1, 2]
        const arr2 = ['1', '2']
        const result = checkArraysEquality(arr, arr2)

        expect(result).toBeFalsy
    })
})

describe('getValuesGreaterThan', () => {
    it('returns empty array when cannot find grater values', () => {
        const arr = [1, 2]
        const result = getValuesGreaterThan(arr, 5)

        expect(result).toStrictEqual([])
    })

    it('returns an array containing 5, 7, 9', () => {
        const arr = [1, 2, 5, 7, 9]
        const expectedResults = [5, 7, 9]
        const result = getValuesGreaterThan(arr, 4)

        expect(result).toEqual(expect.arrayContaining(expectedResults))
    })
    
    it('returns an array with values grater, but not equal than 4', () => {
        const arr = [1, 2, 4, 5, 7, 9]
        const expectedResults = [5, 7, 9]
        const result = getValuesGreaterThan(arr, 4)

        expect(result).toEqual(expect.arrayContaining(expectedResults))
    })

    it('throws an error if array is not passed', () => {
        expect(() => getValuesGreaterThan({}, 5)).toThrow()
    })
})




