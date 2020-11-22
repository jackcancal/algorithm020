/*
执行用时：128 ms, 在所有 JavaScript 提交中击败了98.29%的用户
内存消耗：45.8 MB, 在所有 JavaScript 提交中击败了13.95%的用户
* */

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.dequeue = new Array(k).fill(null);
    this.tail = -1;
    this.size = k;
};

MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false;
    else {
        for(let i = this.tail + 1; i >= 1; i--){
            this.dequeue[i] = this.dequeue[i - 1]
        }
        this.dequeue[0] = value;
        this.tail++;
        return true;
    }
};

MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false;
    else {
        this.dequeue[++this.tail] = value;
        return true;
    }
};

MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty())return false;
    else {
        for(let i = 0; i < this.tail; i++){
            this.dequeue[i] = this.dequeue[i+1]
        }
        this.dequeue[this.tail--] = null;
        return true;
    }
};

MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false;
    else {
        this.dequeue[this.tail--] = null;
        return true;
    }
};

MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1;
    return this.dequeue[0];
};

MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1;
    return this.dequeue[this.tail]
};

MyCircularDeque.prototype.isEmpty = function() {
    return this.tail < 0;
};

MyCircularDeque.prototype.isFull = function() {
    return this.size === this.tail + 1
};

