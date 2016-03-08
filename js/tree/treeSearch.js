function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}
function inOrderCenter (node) {
		if (node) {
			// console.log(node.data);	//先序遍历
			inOrderCenter(node.left);	
			// console.log(node.data);	//中序遍历
			inOrderCenter(node.right);
			console.log(node.data);	//后序遍历
		}
}
function getSmallest (node) {
	var current = node;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current;
}
function removeNode (this, key) {
	if (this.node == null) {
		return null;
	}
	if (key < this.node.data) {
		var current = this.node.left;
		if (key < this.node.data) {
			this.node.left = removeNode(this.node.left, key);
			return this.node;
		} else if (key > this.node.data) {
			this.node.right = removeNode(this.node.right, key);
			return this.node;
		} else if (key == this.node.data) {
			if (this.node.left == null) {
				return this.node.right;
			} else if (this.node.right == null) {
				return this.node.left;
			} else if (this.node.right == null && this.node.left == null) {
				return null;
			} else {
				var tempNode = getSmallest(node.right);
				this.
			}
		}

	}
}
function searchTree() {
	this.root = null;
	this.size = 0;
}

searchTree.prototype = {
	search : function () {
		// return this.node.hasOwnProperty();
	},
	getMin : function () {
		var current = this.root;
		while (!(current.left == null)) {
			current = current.left;
		}
		return current.data;
	},
	getMax : function () {
		var current = this.root;
		while (!(current.right == null)) {
			current = current.right;
		}
		return current.data; 
	},
	find : function (key) {
		var current = this.root;
		while (current) {
			if (current.data < key) {
				current = current.right;
			} else if (current.data > key) {
				current = current.left
			} else if (current.data == key) {
				console.log(current);
				return current;
			}
		}
		return null;
	},
	insert : function (data) {
		var node = new Node(data,null,null);
		if (this.root == null) {
			this.root = node;
		} else {
			var current = this.root;
			var parent;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current == null) {
						parent.left = node;
						break;
					}
				} else {
					current = current.right;
					if (current == null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}
}

var testTree = new searchTree();
testTree.insert(1);
testTree.insert(0);
testTree.insert(2.5);
// inOrderCenter(testTree.root);
testTree.find(0);
// console.log(testTree.root);

