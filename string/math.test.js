/* 
    Keri Russin
    Web Development B.S.
    WDV353 | Server-Side Languages | C202204
*/


const {
    add,
    subtract,
    multiply,
    divide,
    calcSquareRoot,
    calcMax
} = require("./math")

describe("Testing numbers to find total", () => {

    test("should add two numbers for total", () => {
        expect(add(5,10)).toBe(15);
    });

    test("should subtract two numbers for total", () => {
        expect(subtract(50,10)).toBe(40);
    });

    test("should multiply two numbers for total", () => {
        expect(multiply(100,5)).toBe(500);
    });

    test("should divide two numbers for total", () => {
        expect(divide(160,2)).toBe(80);
    });

    test("should return square root of 25 to 5", () => {
        expect(calcSquareRoot(25)).toBe(5);
    });

    test("should return max number out of 25 and 30 to 30", () => {
        expect(calcMax(25, 30)).toBe(30);
    });
});