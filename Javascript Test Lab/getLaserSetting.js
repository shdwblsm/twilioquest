// 


function getLaserSetting(magicWord) {
  if (magicWord === 'Please') {
    return 'OFF';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting();
console.log('The current laser setting is: ' + currentSetting);