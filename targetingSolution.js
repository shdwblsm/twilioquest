class TargetingSolution {
		
	constructor(config) {
		this.x = config.x;		
		this.y = config.y;
		this.z = config.z;
		
	}
			

	
	target() {
	var coordinates;	
	coordinates = '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
	
	return coordinates;
	
	}
	
	
}


const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900
});

console.log(m.target()); // would print "(10, 15, 900)"