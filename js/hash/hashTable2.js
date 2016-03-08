//开链法 避免碰撞 
//本质：以二维数组的形式存储数据以避免碰撞
//适用于数组的大小是待存储数据个数的1.5 倍及以下

function HashTable(num) {
	var len = num || 137;
	this.table = new Array(len);
}

HashTable.prototype = {
	betterHash : function (string) {
 		var H = 37;
 		var total = 0;
 		for (var i = 0; i < string.length; i++) {
 			total += H*total + string.charCodeAt(i);
 		}
 		total = total%this.table.length;
 		return parseInt(total);
 	},
 	put : function (data) {
 		var hashCode = this.betterHash(data);
 		if (undefined === this.table[hashCode]) {
 			this.table[hashCode] = new Array();
 			this.table[hashCode][0] = data;
 		} else {
 			this.table[hashCode][this.table[hashCode].length] = data;
 		}
 	},
 	putArr : function () {
 		data.forEach(function (val) {
 			this.put(val);
 		});
 	},
 	showHashTable : function () {
 		for (var i = 0; i < this.table.length-1; i++) {
 			if (undefined !== this.table[i]) {
 				console.log(this.table[i].join(","));
 			}
 		}
 	}
}



//test
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
hTable.put(someNames[i]);
}
hTable.showHashTable();


