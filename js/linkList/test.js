/**
 * 鍗曞悜閾捐〃
 * by snandy 2011
 * 
 */
LinkedList = function() {

    function Node(data, next) {
        this.data = data || null;
        this.next = next || null;
    }
    Node.prototype = {
        getValue: function() {
            return this.data;
        },
        setValue: function(obj) {
            this.data = obj;
        },
        getNext: function() {
            return this.next;
        },
        setNext: function(node) {
            this.next = node;
        }
    };
    Node.prototype.constructor = Node;


    function nodeByIndex(index, head) {
        var node = head;
        var i = 0;
        // 绗竴涓�
        if (index === 0) {
            return node;
        }
        while (node.next) {
            if (i === index) {
                return node;
            }
            node = node.next && node.next;
            i++;
        }
        // 鏈€鍚� 涓€涓�
        return node;

    }

    // 涓€娆″惊鐜幏鍙栧綋鍓嶈妭鐐瑰拰鍏跺墠椹�
    function nodeByData(data, list) {
        var prev = null,
            node = list.head;
        while (node.next) {
            if (node.data == data) {
                if (node == list.head) {
                    return {
                        prev: null,
                        curr: node
                    };
                } else {
                    return {
                        prev: prev,
                        curr: node
                    };
                }
            }
            prev = node;
            node = node.next;
        }
        if (node.data == data) {
            // 閾捐〃鍙湁涓€涓厓绱犳椂锛岀涓€涓厓绱犳病鏈夊墠椹憋紝涓嶄細杩涘叆while鍐�
            if (list.size() === 1) {
                return {
                    prev: null,
                    curr: node
                };
            }
            // 鏈€鍚庝竴涓厓绱犳病鏈夊悗缁э紝涓嶄細杩涘叆while鍐�
            else {
                return {
                    prev: prev,
                    curr: node
                };
            }
        }
        // 娌℃湁鎵惧埌
        return null;
    }

    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    LinkedList.prototype = {
        add: function(index, obj) {
            if (obj === undefined || obj === null || typeof index != 'number') {
                throw new Error('add failed, invalid param');
            }
            // 閫嗗悜鍙� -1锛屽鍙栨渶鍚庝竴涓厓绱�
            if (index < 0) {
                index = this.length + index;
            }
            // 绌洪摼琛�/绱㈠紩瓒婄晫
            if (index < 0 || index > this.length) {
                throw new Error('add failed, invalid index');
            }

            var newNode = new Node(obj);
            if (index == 0) {
                if (this.head) {
                    newNode.setNext(this.head);
                    this.head = newNode;
                } else {
                    this.head = this.tail = newNode;
                }
            } else {
                var node = nodeByIndex(index - 1, this.head),
                    next = node.next;
                node.setNext(newNode);
                newNode.setNext(next);
            }
            this.length++;

        },
        get: function(index) {
            if (typeof index !== 'number') {
                throw new Error('get failed, invalid param');
            }
            // 閫嗗悜鍙� -1锛屽鍙栨渶鍚庝竴涓厓绱�
            if (index < 0) {
                index = this.length + index;
            }
            // 绌洪摼琛�/绱㈠紩瓒婄晫
            if (this.isEmpty() || index < 0 || index >= this.length) {
                throw new Error('Index: ' + index + ', Size: ' + this.length);
            }

            var node = nodeByIndex(index, this.head);

            return node.data;
        },
        getFirst: function() {
            return this.get(0);
        },
        getLast: function() {
            return this.get(this.length - 1);
        },
        set: function(index, obj) {

            // 閫嗗悜鍙� -1锛屽鍙栨渶鍚庝竴涓厓绱�
            if (index < 0) {
                index = this.length + index;
            }
            // 绌洪摼琛�/绱㈠紩瓒婄晫
            if (this.isEmpty() || index < 0 || index >= this.length) {
                throw new Error('Index: ' + index + ', Size: ' + this.length);
            }

            var node = nodeByIndex(index, this.head);

            node.data = obj;

        },
        size: function() {
            return this.length;
        },
        clear: function() {
            this.head.next = null;
            this.head = null;
        },
        remove: function(obj) {
            var nodes = nodeByData(obj, this);

            if (nodes === null) {
                throw new Error('remove failed, the node does not exist');
            }

            var curr = nodes.curr,
                prev = nodes.prev;

            // 鍒犻櫎绗竴涓厓绱狅紝娉ㄦ剰绗竴涓厓绱犳病鏈夊墠椹�
            if (prev === null) {
                this.head = curr.next;
                curr.next = null;
                curr = null;
            } else {
                prev.setNext(curr.next);
                curr.next = null;
                curr = null;
            }
            this.length--;
            // 缁存姢tail锛屼絾寮€閿€澶ぇ
            //this.tail = nodeByIndex(this.length-1, this.head);
        },
        isEmpty: function() {
            return this.head === null;
        },
        addLast: function(obj) {
            this.add(this.length, obj);
        },
        addFirst: function(obj) {
            this.add(0, obj);
        },
        contains: function(obj) {
            var node = this.head;
            if (this.isEmpty()) {
                return false;
            }
            while (node.next) {
                if (node.data == obj) {
                    return true;
                }
                node = node.next;
            }
            // 绗竴涓�(length涓�1鏃�)鍜屾渶鍚庝竴涓厓绱�
            if (node.data == obj) {
                return true;
            }
            return false;
        },
        toString: function() {
            var str = '',
                node = this.head;

            if (this.isEmpty()) {
                return '[]';
            }
            str = '[' + node.data;
            while (node.next) {
                node = node.next;
                str += ',' + node.data;
            }
            str += ']';

            return str;
        }

    };

    LinkedList.prototype.constructor = LinkedList;

    return LinkedList;

}();
