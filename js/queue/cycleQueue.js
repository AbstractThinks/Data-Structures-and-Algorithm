function CycleQueue() {
	this.base = [];
	this.front = 0;
	this.rear = 0;
	this.MAXSIZE = 10;
}

CycleQueue.prototype = {
	enQueue: function (data) {
		if ((this.front === this.rear) && this.base[this.front]) {
			throw new Error('cycleQueue is already full !');
			return false;
		}
		this.base[this.rear % this.MAXSIZE] = data;
		this.rear = (this.rear + 1) % this.MAXSIZE;
	},
	deQueue: function () {
		if ((this.fornt === this.rear) && (!this.base[this.front])) {
			throw new Error('cycleQueue is already empty');
		}

		var elem = this.base[this.front];
		this.base.splice(this.front,1);
		this.front = (this.front + 1) % this.MAXSIZE;
		// this.rear = this.rear - 1;
		return elem;
	},
	clear: function () {
		this.base = [];
		this.front = this.rear = 0;
	},
	size: function () {
		if ((this.front === this.rear) && this.base[this.front]) {
			return this.MAXSIZE;
		}
		return (this.rear - this.front + this.MAXSIZE) % this.MAXSIZE;
	},
	peekAt: function (index) {
		index = (index || 0 + this.MAXSIZE) % this.MAXSIZE;
		return this.base[index + this.front] || null;
	},
	getHead: function () {
		var elem = this.base[this.front];
		return elem ? elem : null;
	},
	queueTraverse: function (iterator) {

	},
	displayAll: function () {
		console.log("this.base = "+this.base)
		var base = [].slice.call(this.base);
		return this.base;
		
	}
}

var queue = new CycleQueue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
queue.enQueue(6);
queue.enQueue(7);
queue.enQueue(8);
queue.enQueue(9);

console.log(queue.displayAll());
// console.log(queue.size());
queue.deQueue();
queue.deQueue();

queue.enQueue(10);
// queue.enQueue(9);
// queue.enQueue(9);
console.log(queue.displayAll());
console.log(queue.size());


// console.log(queue.displayAll());
// console.log(queue.size());
// // console.log(queue.peekAt(0));
// console.log(queue.peekAt(1));
// // console.log(queue.peekAt(2));
// // console.log(queue.peekAt(3));
// // console.log(queue.peekAt(4));