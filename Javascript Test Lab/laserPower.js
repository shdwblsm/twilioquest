
function calculatePower(powerSettings) {
	
	let totalPower = 0;
	
	// all values*2 then add all together and return result
	
	increasedPower = powerSettings.map((item) => item * 2);
	
	totalPower = increasedPower.reduce((sum, current) => sum + current, 0);
	
	return totalPower;
}

const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24