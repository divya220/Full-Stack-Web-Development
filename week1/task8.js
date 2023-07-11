function checkNumber(number) {
    if (number < 0) {
    throw new Error("Number cannot be negative");
    }
    console.log("Number is valid:", number);
    }
    try {
    checkNumber(-5);
    } catch (error) {
    console.log("Error:", error.message);
    }