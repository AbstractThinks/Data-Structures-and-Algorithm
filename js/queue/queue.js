function Queue() {
	this.rear = null;
	this.front = null;
	this.size = 0;
}

Queue.prototype = {
	clear: function () {
		this.rear = null;
		this.front = null;
		this.size = 0;
	},
	getHead: function () {
		return this.front ? this.front.data : null;
	},
	enQueue: function (elem) {
		if (this.front === null) {
			this.rear = this.front = {data:elem, next: null};
		} else {
			var p = {data: elem, next: null};
			this.rear.next = p;
			this.rear = p;
		}
		this.size++;
	},
	deQueue: function () {
		if (this.front) {
			var elem = this.front.data;
			this.front = this.front.next;
			if (this.front === null) {
				this.rear = null;
			}
			this.size--;
			return elem;
		} else {
			return null;
		}
	},
	queueTraverse: function (iterator) {
		var current = this.front;
		while (current) {
			if (iterator(current.data)) {
				break;
			}
			current = current.next;
		}
	},
	peekAt: function (index) {
		index = index || 0;
		if (index < this.size) {
			var current = this.front;
			for (var i = 0; i < index; i++) {
				current = current.next;
			}
			return current.data;
		}
		return null;
	},
	displayAll: function () {
		if (this.front === null) {
			return null;
		}

		var arr = [];
		var current = this.front;
		var len = this.size;

		for (var i = 0; i < len; i++) {
			arr[i] = current.data;
			current = current.next;
		}
		return arr;
	}
}

var queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
// queue.deQueue();
queue.enQueue(4);
queue.enQueue(5);
console.log(JSON.stringify(queue));
console.log(queue.peekAt(0));
console.log(queue.peekAt(1));
console.log(queue.peekAt(2));
console.log(queue.peekAt(3));