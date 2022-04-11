/* 
    Keri Russin
    Web Development B.S.
    WDV353 | Server-Side Languages | C202204
*/


const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const calcSquareRoot = (c) => {
    return Math.sqrt(c);
}

const calcMax = (d, e) => {
    return Math.max(d, e)
}



module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calcSquareRoot,
    calcMax
}