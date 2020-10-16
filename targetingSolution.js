class TargetingSolution {
	constructor(config) {
		this.x = config[0];
		this.y = config[1];
		this.z = config[2];
	}
	
	target() {
		console.log(this.x);
		console.log(this.y);
		console.log(this.z);
		
		this.coord = '(' + this.x + ',' + this.y + ',' + this.z + ')';
		
		console.log(this.coord);
		
	}
	

}


// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900
});

console.log(m.target()); // would print "(10, 15, 900)"