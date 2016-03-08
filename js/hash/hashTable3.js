//线性探测法 避免碰撞
//数组table 和values 并行工作，当将一个键值保存到数组table 中时，将数据存入数组values 中相应的位置上。
//适用于数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。

function HashTable(num) {
	var len = num || 137;
	this.table = new Array(len);
	this.value = new Array(len);
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
 	put : function (key, data) {
 		var hashCode = this.betterHash(data);
 		if (undefined === this.table[hashCode]) {
 			this.table[hashCode] = key;
 			this.value[hashCode] = data;
 		} else {
 			while (undefined !== this.table[hashCode]) {
 				hashCode++;
 			}
 			this.table[hashCode] = key;
 			this.value[hashCode] = data;
 		}
 	},
 	putArr : function (arr) {
 		arr.forEach(function (val){
 			this.put(val.key, val.data);
 		});
 	},
 	get : function (key) {
 		var hashCode = -1;
 		hashCode = this.betterHash(key);
 		if (hashCode > -1) {
 			for (var i = hashCode; undefined !== this.table[hash]; i++) {
 				if (this.table[hashCode] == key) {
 					return this.value[hashCode];
 				}
 			}
 		}
 		return undefined;
 	},
 	showHashTable : function () {
 		for (var i = 0; i < this.table.length-1; i++) {
 			if (undefined !== this.table[i]) {
 				console.log("key: "+this.table[i]+" value: "+this.value[i]);
 			}
 		}
 	}
}