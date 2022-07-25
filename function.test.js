const {returnTwo, greeting, add} = require('./functions')

describe('function testings', () => {
    test('returnTwo testing', () => {
        //let returnTwoFunction = returnTwo(testData)
        expect(returnTwo()).toEqual(2)
    })

    test('greetings testings', () => {
        //let greatfun = greeting(testData.name)
        expect(greeting('James')).toContain('Hello, James')
        expect(greeting('Jill')).toContain('Hello, Jill')
    })

    test('add testing', () => {
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })
})