var arrayLength = (process.argv.length)

var totalSum = 0;

for( var i=2; i < arrayLength; i++) {
	totalSum += +process.argv[i]
}

console.log(totalSum)