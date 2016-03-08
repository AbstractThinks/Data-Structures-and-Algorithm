function qSort(list) {
	if (list.length == 0) {
		return [];
	}
	var lesser = [];
	var greater = [];
	var pivot = list[0];
	for (var i = 1; i < list.length; i++) {
		if (list[i] < pivot) {
			lesser.push(list[i]);
		} else {
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot, qSort(greater));
}
var arr = qSort([93,23,0,88,21,70,4,46]);
console.log(arr)