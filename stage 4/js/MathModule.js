const string = "Some text";
const bool = true;

export class SimpleMath {
    static PI = 3.14;

    static add (a, b) {
        return a + b;
    }

    subtract (a, b) {
        return a - b;
    }
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function addSubtractMultiply(a, b) {
    return SimpleMath.add(a, b) - multiply(a, b);
}

export {
    multiply,
    divide
};