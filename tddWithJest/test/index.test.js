let { countCapitalLetters } = require('../source/index')

// When you're ready to run each test, remove the 'x' from 'xtest'
describe("countCapitalLetters functionality", () => {
    test("When given a string no one capital letters, the function returns the number 0.", () => {
        expect(countCapitalLetters("banana")).toEqual(0)
    })

    test("When given a string with one capital letter, the function returns the number 1.", () => {
        expect(countCapitalLetters("Alex")).toEqual(1)
    })

    test("When given a string with multiple capital letters, the function returns the expected number.", () => {
        expect(countCapitalLetters("Alex")).toEqual(1)
        expect(countCapitalLetters("New York")).toEqual(2)
        expect(countCapitalLetters("This code is bananas, b A n A n A s!")).toEqual(4)
    })

    test("When given an empty string or whitespace as an argument, the function returns 0", () => {
        expect(countCapitalLetters("")).toEqual(0)
        expect(countCapitalLetters("        ")).toEqual(0)
    })

    test("When given anything other than a string as an argument, the function returns false", () => {
        expect(countCapitalLetters(9)).toEqual(false)
        expect(countCapitalLetters(["woah!"])).toEqual(false)
        expect(countCapitalLetters(true)).toEqual(false)
        expect(countCapitalLetters(new Object())).toEqual(false)
    })
})