/* 
    Keri Russin
    Web Development B.S.
    WDV353 | Server-Side Languages | C202204
*/


const {
    uppercase, 
    lowercase
} = require("./string")

describe("Testing the string module", () => {

    test("should uppercase a string input", () => {
        expect(uppercase("bob")).toBe("BOB");
    });

    test("should lowercase a string input", () => {
        expect(lowercase("FULL Sail")).toBe("full sail");
    })
});
