function Stack() {
	this.top = null;
	this.size = 0;
}

Stack.prototype = {
	push: function (data) {
		var node = {
			data : data,
			next : null
		}
		node.next = this.top;
		this.top = node;
		this.size++;
	},
	peek: function () {
		return this.top === null ? null : this.top.data;
	},
	pop: function () {
		if (this.top === null) {
			return null;
		}
		var out = this.top;
		this.top = this.top.next;
		if (this.size > 0) {
			this.size--;
		}
		return out.data;
	},
	clear: function () {
		this.top = null;
		this.size = 0;
	},
	displayAll: function () {
		if (this.top === null) {
			return null;
		}
		var arr = [];
		var current = this.top;
		var len = this.size;
		for (var i = 0; i < len; i++) {
			arr[i] = current.data;
			current = crrent.next;
		}

	} 
}

var stack = new Stack();
stack.push(1);
stack.push('asd');
stack.pop();
stack.push({a:1});
console.log(stack);

function numTransform(number, rad) {
	var s = new Stack();
	while (number) {
		s.push(number % rad);
		number = parseInt(number/2, 10);
	}
	var arr = [];
	while (s.top) {
		arr.push(s.pop());
	}
	console.log(arr.join(''));
}

numTransform(8, 2);