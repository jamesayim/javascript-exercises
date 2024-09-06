const sumAll = function(...num) {
    if (!num.every(element => typeof element === "number" && element >= 0 && Number.isInteger(element))) {
            return "ERROR";
        }

        num.sort((a, b) => b - a); // sorting from largest number to smallest

        let sum = 0; // initializing the sum

    for (let i = num[0]; i >= num[num.length - 1]; i--) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
