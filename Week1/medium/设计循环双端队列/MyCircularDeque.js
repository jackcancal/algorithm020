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

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.size > this.tail + 1){
        for(let i = this.tail + 1; i >= 1; i--){
            this.dequeue[i] = this.dequeue[i - 1]
        }
        this.dequeue[0] = value;
        this.tail++;
        return true;
    }else {
        return false;
    }
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.size > this.tail + 1){
        this.dequeue[++this.tail] = value;
        return true;
    }else {
        return false;
    }
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.tail > -1){
        for(let i = 0; i < this.tail; i++){
            this.dequeue[i] = this.dequeue[i+1]
        }
        this.dequeue[this.tail--] = null;
        return true;
    }else {
        return false;
    }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.tail > -1){
        this.dequeue[this.tail--] = null;
        return true;
    }else {
        return false;
    }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.tail > -1){
        return this.dequeue[0];
    }else {
        return -1;
    }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.tail > -1){
        return this.dequeue[this.tail];
    }else {
        return -1;
    }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.tail < 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.tail + 1
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
