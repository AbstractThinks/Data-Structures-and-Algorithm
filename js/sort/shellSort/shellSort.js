function ShellSort (arr) {
	this.dataStore = arr;
}

ShellSort.prototype = {
	shellsort : function () {
		var N = this.dataStore.length;

		for (var count = parseInt(N/2); count > 0; count = parseInt(count/2)) {
			for (var i = count; i < N; i++) {
				for (var j = i - count; j < N; j += count) {
					
					if (this.dataStore[j - count] > this.dataStore[j]) {
						var t = this.dataStore[j];
						this.dataStore[j] = this.dataStore[j - count];
						this.dataStore[j - count] = t;
					}
				}
			}
			console.log(this.dataStore);
		}
	}
}


//test
//[93,23,0,88,21,70,4,46,30,69,75,41,67,93,57,94,21,75,39,50]
//[93,23,0,88,21,70,4,46,30,69]
//[93,23,0,88,21,70,4,46]
//[93,23,0,88,21,70,4]
//[93,23,0,88,21,70]
//[93,23,0,88,21]
//[93,23,0,88]
//[93,23,0]
var arr = new ShellSort([93,23,0,88,21,70,4]);
arr.shellsort();