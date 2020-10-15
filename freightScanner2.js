

function scan(freightItems) {
	let contrabandIndexes= [];
	
	freightItems.forEach((freightItem, index) => {
		if (freightItem == 'contraband') {
			
			contrabandIndexes.push(index);
			
			return contrabandIndexes; 
			
		} else {
			
			return;
		
		}
	})

	return contrabandIndexes;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]