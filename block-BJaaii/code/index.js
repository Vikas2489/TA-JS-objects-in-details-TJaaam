// 1. Create a class name `Stack` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `stack`


// Methods:

// - `push`: will accept a value and add to the stack. Stack adds data at the end
// - `pop`: will delete the last element (max index) of the stack
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
// - `reverse`: will reverse all the elements of the stack and return the reversed stack
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayStack`: returns all the data in stack in string format



// - `length`: returns the current length of the stack.

class Stack {
    constructor() {
        let newArr = [];
        return newArr;
    }

    get length() {
        return this.length;
    }

    push(value) {
        return this.push(value);
    }

    pop() {
        // let lastElm = this.length - 1;
        // this.splice(lastElm);
        // return this;
        this.pop();
        return this;
    }
    reverse() {
        return this.reverse();
    }
}


Array.prototype.peek = function(index = this.length - 1) {
    return this[index];
}

Array.prototype.displayStack = function() {
    return this.join(" ");
}

Array.prototype.isEmpty = function() {
    if (this.length === 0) {
        return true;
    } else {
        return false;
    }
}



// #### Test


let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true




// 2. Create a class name `Queue` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `queue`

// Methods:

// - `enqueue`(item): Adds the item at the end of the queue
// - `dequeue`: Removes an item from the top of the queue
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the first element from top (index 0)
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayQueue`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.


class Queue {
    constructor() {
        let newArr = [];
        return newArr;
    }
    get length() {
        return this.length;
    }
}

Array.prototype.dequeue = function() {
    return this.shift();
}

Array.prototype.enqueue = function(item) {
    return this.push(item);
}

Array.prototype.displayQueue = function() {
    return this.join(" ");
}

Array.prototype.peek = function(index = 0) {
    return this[index];
}









// #### Test


let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true