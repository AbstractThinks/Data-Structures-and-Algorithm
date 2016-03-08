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
 	}
 }