


function scanAndFilter(freightItems, forbiddenString) {
	
	let filteredItems = [];
		
	freightItems.filter(freightItem => {if (freightItem != forbiddenString) {return filteredItems.push(freightItem);}})
		
	return filteredItems;
}

// The Test
const filtered = scanAndFilter(
  ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
  'ray gun'
);
console.log('Filtered Items');
console.log(filtered); // should be ['dog', 'cat', 'zippers']