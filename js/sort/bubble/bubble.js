function bubbleSort(myArray) {
	if (myArray.length === 0 || !(myArray instanceof Array)) {
		throw new Error('data is illegal');
	}

	var len = myArray.length;
	var i = 0;
	var j = 0;
	var stop = 0;

	for (i = 0; i < len; i++) {
		for (j = 0, stop = len-i; j < stop; j++) {
			if (myArray[j] > myArray[j + 1]) {
				var o;
				o = myArray[j];
				myArray[j] = myArray[j + 1];
				myArray[j + 1] = o;
			}
		}
	}

	return myArray;
}

console.log(bubbleSort([2,5,6,8,9,34,2]));