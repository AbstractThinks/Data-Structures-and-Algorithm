

function Set() {
	this.items = {};
}

Set.prototype = {
	has : function (value) {
		return this.items.hasOwnProperty(value);
	},
	add : function (value) {
		if (!this.has(value)) {
			this.items[value] = value;
			return true;
		}
		return false;
	},
	remove : function (value) {
		if (this.has(value)) {
			delete this.items[value];
			return true;
		}
		return false;
	},
	//并集
	union : function (set) {
		for (var o in set.items) {
			if (!this.has(set.items[o])) {
				this.add(set.items[o]);
			}
		}
		return this;
	},
	//交集
	intersect : function (set) {

	},
	

}

var set = new Set();
var set2 = new Set();
set.add(44);
set.add(55);
set.add(44);
set2.add(44);
set2.add(66);
set2.add(44);
// set.remove(55);
var testSet = set.union(set2);
console.log(testSet.items);