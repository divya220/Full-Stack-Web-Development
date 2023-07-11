function findMinMaxSalary(salaries) {
    var minSalary = Math.min(...salaries);
    var maxSalary = Math.max(...salaries);
    return {
    minSalary: minSalary,
    maxSalary: maxSalary
    };
    }
    // Usage example
    var salaries = [3000, 5000, 2000, 8000, 4000];
    var result = findMinMaxSalary(salaries);
    console.log(result);