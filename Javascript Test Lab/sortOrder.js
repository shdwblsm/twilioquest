

const actCode1 = process.argv[2].toLowerCase();
const actCode2 = process.argv[3].toLowerCase();


if ( actCode1 > actCode2 ) {
	console.log("1");
} else if (actCode1 < actCode2) {
	console.log("-1");
} else { console.log("0"); }