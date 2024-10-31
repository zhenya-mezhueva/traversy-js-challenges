function calculator(x, y, operator) {
    let result;
    switch (operator) {
        case '+': {
            result = x + y;
            break;
        }
        case "-": {
            result = x - y;
            break;
        }
        case "*": {
            result = x * y;
            break;
        }
        case "/": {
            result = x / y;
            break;
        }
        default:
            throw new Error('Invalid operator');    }
    return result;
}

module.exports = calculator;
