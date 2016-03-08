##队列(Queue)：也是运算受限的线性表。是一种先进先出(First In First Out ，简称FIFO)的线性表。只允许在表的一端进行插入，而在另一端进行删除。

Class Queue {

	this.rear = null;
	this.front = null;
	this.size = 0;
	
	clear() {}
	getHead() {}
	enQueue() {}
	deQueue() {}
	queueTraverse() {}
	peekAt() {}
	displayAll() {}

}

**顺序队列中存在“假溢出”现象。因为在入队和出队操作中，头、尾指针只增加不减小，致使被删除元素的空间永远无法重新利用。因此，尽管队列中实际元素个数可能远远小于数组大小，但可能由于尾指针巳超出向量空间的上界而不能做入队操作。该现象称为假溢出。**

Class CycleQueue {

	this.base = {};
	this.front = 0;
	this.rear = 0;
	this.MAXSIZE = 100;

	enQueue() {}
	deQueue() {}
	clear() {}
	size() {}
	peekAt() {}
	getHead() {}
	queueTraverse() {}
	displayAll() 
}
	