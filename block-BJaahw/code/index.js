// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

function createUser(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function createUser(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    obj.sayHello = function() {
        return alert(`Welcome ${obj.name}`);
    }
    return obj;
}

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

let personOne = createUser("Vikas", 21);
let personTwo = createUser("Prerna", 20);


// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

let userMethods = {
    sayHello() {
        return alert(`Welcome ${this.name}`);
    },
}

function createUser1(name, age) {
    let obj1 = Object.create(userMethods);
    obj1.name = name;
    obj1.age = age;
    return obj1;
}

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function CreateUser(name, age) {
    this.name = name;
    this.age = age;
}
CreateUser.prototype = {
    sayHello() {
        return alert(`Welcome ${this.name}`);
    }
}

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

personOne = new CreateUser("Prerna", 30);
personTwo = new CreateUser("Chetna", 23);

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

console.log(personOne.sayHello())
console.log(personTwo.sayHello())

// 8. Convert the `createUser` function into `User` class.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return alert(`Welcome ${this.name}`);
    }
}

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

personOne = new User("Ankit", 25);
personTwo = new User("Preksha", 30);

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

personOne.sayHello();
personTwo.sayHello();