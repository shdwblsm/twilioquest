// Fix the treeLifeDetector


const argumentValue = process.argv[2];
const treeLife = Number(argumentValue);

if (treeLife === 0) {
	console.log("alive");
} else if (treeLife === 1) {
	console.log("flowering");
} else if (treeLife === 2) {
	console.log("shedding");
} else if (treeLife >= 3) {
	console.log("other");
} else {
	console.log("unknown"); 
}
