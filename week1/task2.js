function calculateOperations(a, b) {
    var sum = a + b;
    var difference = a - b;
    var product = a * b;
    var quotient = a / b;
    return {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient
    };
    }
    // Usage example
    var result = calculateOperations(10, 5);
    console.log(result);