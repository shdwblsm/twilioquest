
function mutate(freightItems) {
  // This is an array variable you can override with your mutated array
	let mutatedItems = [];

	mutatedItems = freightItems.map((item) => item.toUpperCase())
  
	return mutatedItems;

}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'RAY GUN', 'CAT']