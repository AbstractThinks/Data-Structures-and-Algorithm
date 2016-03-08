function insertSort (myArray) {
	if (myArray.length === 0 || !(myArray instanceof Array)) {
		throw new Error('data is illegal');
	}
	var j;
	var value;
	for (var i = 0; i < myArray.length; i++) {
		value = myArray[i];

		for (j = i - 1; j > -1 && myArray[j] > value; j--) {
				myArray[j + 1] = myArray[j];
		}
		myArray[j+1] = value;

	}

	return myArray;
}


console.log(insertSort([4,7,33,5,8,2,6]));