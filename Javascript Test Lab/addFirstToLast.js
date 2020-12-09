
let inputArray = process.argv[2];

function addFirstToLast(inputArray) {
	let firstAndLast = '';
	
	if (inputArray.length > 0) {
		firstAndLast = inputArray[0] + inputArray[inputArray.length-1];
	}
	
	return firstAndLast;

}

// The lines of code below will test your function when you run it from the
// command line with Node.js
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));