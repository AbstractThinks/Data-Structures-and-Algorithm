function selectionSort(arr) {
	if (arr.length === 0 || !(arr instanceof Array)) {
		throw new Error('data is illegal');
	}

	for (var i = 0; i < arr.length; i++) {
		var min = i;
		var o;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min != i) {
			o = arr[i];
			arr[i] = arr[min];
			arr[min] = o;
		}
	}
	return arr;
}


console.log(selectionSort([4,6,7,33,3,5]));