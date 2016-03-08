 function HashTable() {
 	this.table = new Array(137);
 }

 HashTable.prototype = {

 	simpleHash : function (data) {
 		var total = 0;
 		for (var i = 0; i < data.length; i++) {
 			total += data.charCodeAt(i); //方法可返回指定位置的字符的 Unicode 编码
 		}
 		return total % this.table.length;
 	},
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
 		// this.table[simpleHash(data)] = data;
 		this.table[this.betterHash(data)] = data;
 	}
 }

