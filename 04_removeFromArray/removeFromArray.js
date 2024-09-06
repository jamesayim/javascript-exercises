const removeFromArray = function(arr, ...num) {
    num.forEach(element => {

        let indexOfNum = arr.indexOf(element);
    while (indexOfNum !== -1) {
        arr.splice(indexOfNum, 1);
        indexOfNum = arr.indexOf(element);
    }
});
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
