class Ducktypium {
	constructor(color) {
		this.color = color;
		this.calibrationSequence = [];
	}
	
	refract() { 
	
		try {
			if (this.color === 'red') { console.log('red'); } 
			if (this.color === 'blue') { console.log('purple'); }
			if (this.color === 'yellow') { console.log('orange'); }
			
			break;
	
		} catch(e) {
		
			console.log(this.color + ": Color Selection Incorrect.");
		
		}
	}
	
	
	calibrate() { }
	
}

// Test

const dt = new Ducktypium('pink');

console.log(dt.color); // prints 'red'

console.log(dt.refract('pink')); // prints 'purple'