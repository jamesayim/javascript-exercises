const repeatString = function(string, num) {
	let result = "";
	for (let i = 0; i < num; i++) {
		result += string;
	}
	if (num >= 0 || string === "") {
		return result;
	} else {
		return "ERROR";
	}
};

repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
