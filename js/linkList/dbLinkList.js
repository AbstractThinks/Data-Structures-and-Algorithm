function dbLinkList(elem){
	this.node = {
		elem : elem,
		prev : null,
		next : null
	};
	this.size = 0;
}

dbLinkList.prototype = {
	append : function (elem) {
		this.size = this.size + 1;

		if (this.node.elem) {
			var node = {
				elem : elem,
				prev : null,
				next : null
			}
			this.node.next = node;
			node.prev = this.node;
			this.node = node;
		} else {
			this.node.elem = elem;			
		}
		return this;
	},
	insert : function (position, elem) {
		var node = {
				elem : elem,
				prev : null,
				next : this.node
		} 
		if (position < 0 || position > this.size) {
			throw new Error('there has problem');
			return false;
		}
		this.size = this.size + 1;
		if (!this.node.elem) {
			this.size = this.size + 1;
			this.elem = elem;
		}
		if (position === 0) {
			
			var current = this.node;
			while (current.prev) {
				current = current.prev;
			}
			return this;
		}
		var current = this.node;
		var arr = [];
 		for (var i = position; i > 0; i--) {
			arr[i] = current;
			current = current.prev;
		}
		node.prev = current;
		while(position-- > 0) {
			arr[position].prev = node;
			node = arr[position];
		}

	}

}

var test = new dbLinkList();
console.log(test.append(4));
console.log(test.append(5));
console.log(test.append(10));
// console.log(JSON.stringify(test.append(5)));
// console.log(JSON.stringify(test.append(10)));