const magicWord = process.argv[2];
var currentSetting = ' ';

function getLaserSetting(magicWord) {
	if (magicWord === 'please') {
		currentSetting = 'OFF';		
		return currentSetting;
	} else {
		currentSetting = 'ON';
		return currentSetting;
	}
}

getLaserSetting(magicWord);
console.log('The current laser setting is: ' + currentSetting);
