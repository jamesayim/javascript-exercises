const fibonacci = function(num) {
	const result = [0, 1];

    if (num <= -1) {
            return "OOPS";
        } else if (typeof num === "string") {
            Number(num);
        }

    while (result.length <= num) {
        const next = (result[result.length - 1]) + (result[result.length - 2]);
        result.push(next);

    }

    return result[num];
};

// Do not edit below this line
module.exports = fibonacci;
