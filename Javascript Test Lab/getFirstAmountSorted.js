
var inputArray = process.argv[2]; listNumber = Number(process.argv[3]);

function getFirstAmountSorted(inputArray, listNumber) {
	var sortedArray = inputArray.sort();
	
	var newArray = sortedArray.slice(0, listNumber);
	
	return newArray;
}


console.log(getFirstAmountSorted(['golden', 'terrier'], 1));
