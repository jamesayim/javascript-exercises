const palindromes = function (input) {
    let cleanedState = String(input).toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = cleanedState.length - 1;

    while (left < right) {
        if (cleanedState[left] !== cleanedState[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
