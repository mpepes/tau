const { expect, it } = require("@jest/globals");
const {
    factorial,
    checkArraysEquality,
    getValuesGreaterThan,
    User,
} = require("./helpers");
const _ = require('lodash')


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

describe('user class', () => {
    it('creates user class instance', () => {
        const user = new User()
        
        expect(user).toBeInstanceOf(User)
    })
    
    it("created user's gender equals male", () => {
        const user = new User('male')
        
        expect(user.getGender()).toEqual('male')
    })
    
    it("created user's age equals 18", () => {
        const user = new User('', 18)
        
        expect(user.getAge()).toEqual(18)
    })
    
    it("setAge changes user's age from 16 to 18", () => {
        const user = new User('', 16)
        expect(user.getAge()).toEqual(16)
        
        user.setAge(18)
        expect(user.getAge()).toEqual(18)
    })
    
    it("tests whoIsUser method and returns 'boy'", () => {
        const user = new User('male', 14)
        
        expect(user.whoIsUser()).toEqual('boy')
    })
    
    it("tests whoIsUser method and returns 'girl'", () => {
        const user = new User('female', 14)
        
        expect(user.whoIsUser()).toEqual('girl')
    })
    
    it("tests whoIsUser method and returns 'man'", () => {
        const user = new User('male', 24)
        
        expect(user.whoIsUser()).toEqual('man')
    })
    
    it("tests whoIsUser method and returns 'woman'", () => {
        const user = new User('female', 24)
        
        expect(user.whoIsUser()).toEqual('woman')
    })
})

describe('lodash', () => {
  it('isEqual method should return true', () => {
      const objectA = { a: 'a '}
      const objectB = { a: 'a '}
      
      expect(_.isEqual(objectA, objectB)).toBeTruthy()
  })
    
  it('isEqual method should return false', () => {
      const objectA = { a: 'a '}
      const objectB = { a: 'b '}
      
      expect(_.isEqual(objectA, objectB)).toBeFalsy()
  })
    
  it('isEmpty method should return true', () => {
      const arr = []
      
      expect(_.isEmpty(arr)).toBeTruthy()
  })
    
  it('isEmpty method should return false', () => {
      const arr = [1]
      
      expect(_.isEmpty(arr)).toBeFalsy()
  })
    
  it('difference method should return empty array', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 3, 2, 1]
      
      expect(_.difference(arr1, arr2)).toEqual([])
  })
    
  it('difference method should return empty array', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 3, 2]
      
      expect(_.difference(arr1, arr2)).toEqual([])
  })
    
  it('difference method should return [2]', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 3]
      
      expect(_.difference(arr1, arr2)).toEqual([2])
  })
    
  it('flatten method should return [1, 2, 2, 3]', () => {
      const arr1 = [1, 2, [2], 3]
      
      expect(_.flatten(arr1)).toEqual([1, 2, 2, 3])
  })
})