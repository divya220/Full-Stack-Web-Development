function simulateAsyncOperation(callback) {
    setTimeout(function() {
    const result = "Async operation completed";
    callback(result);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
    }
    function handleResult(result) {
    console.log("Result:", result);
    }
    simulateAsyncOperation(handleResult);