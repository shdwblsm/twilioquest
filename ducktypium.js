class Ducktypium {
	

	
	constructor(color) {
		const validColors = ['yellow', 'red', 'blue'];
		
		if (!validColors.includes(color)) {
			
			throw new TypeError("Color must be red, yellow or blue");
			
		}
		
		this.color = color;
		this.calibrationSequence = [];	
		
		

	}
	
	refract(secColor) { 
		
		try {
				
			if (this.color === secColor) { 
				return this.color;
				
				
			} 
			else if (this.color != secColor && this.color && secColor === 'blue' || 'yellow' || 'red') { 
						
				try {
					if (this.color === 'blue' && secColor === 'red' || this.color === 'red' && secColor === 'blue') {return('purple');}
				
					if (this.color === 'yellow' && secColor === 'red' || this.color === 'red' && secColor === 'yellow') {return('orange');}
				
					if (this.color === 'blue' && secColor === 'yellow' || this.color === 'yellow' && secColor === 'blue') {return('green');}
					
					else { throw "is not primary."; }
				
				} 
				catch(error) {
					//console.log(error);
					return secColor + " " + error;	
				}
			}
	
			} 
			catch(error) {
		
			return('Something went wrong.');
			
			}
			
	}
	
	calibrate(coloraxis) { 
	
	// Sort numbers smallest to largest
	var calibrate = coloraxis.sort();
	

	// Multiply each number in the array by 3
	this.calibrationSequence = calibrate.map(number => number * 3)

// Assign the resulting array to the Ducktypium instance's calibrationSequence variable	
	return this.calibrationSequence;
	
	}
	
}

// Test

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('turquoise')); // prints 'purple'


dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]