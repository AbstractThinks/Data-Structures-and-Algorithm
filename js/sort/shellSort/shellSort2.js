function ShellSort (arr) {
	this.dataStore = arr;
}

ShellSort.prototype = {
	shellsort : function () {
		var Num = this.dataStore.length;
		var h = 1;
		while (h < Num/3) {
			h = 3 * h + 1;
		}
		while (h >= 1) {
			for (var i = h; i < Num; i++) {
				for (var j = i; j >= h;j -= h) {
					if (this.dataStore[j] < this.dataStore[j-h]) {
						var t = this.dataStore[j];
						this.dataStore[j] = this.dataStore[j-h];
						this.dataStore[j-h] = t;
					}
				}
			}
			h = (h-1)/3;
		}
		console.log(this.dataStore)
	}
}
var arr = new ShellSort([93,23,0]);
arr.shellsort();