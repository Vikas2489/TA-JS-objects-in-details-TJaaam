// # More about class

// 1 - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// class Square {
//     constructor(side) {
//         this.width = side;
//         this.height = side;
//     }
// }

// 2 - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

// class Square {
//     constructor(side) {
//         this.width = side;
//         this.height = side;
//     }

//     description() {
//         alert(`The square is ${this.width} x ${this.height}`)
//     }
// }

// - 3 Create another method named `calcArea` that will return the area of the square.

class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return this.width * this.height;
    }
}

// - 4 Create a getter method named `area` that will return area of the square.

class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return this.width * this.height;
    }

    get area() {
        return this.calcArea();
    }
}


// 5 - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). 
// Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return this.width * this.height;
    }

    get area() {
        return this.calcArea();
    }

    set area(value) {
        let sides = value / 2;
        this.width = sides;
        this.height = sides;
    }

}


// 6 Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class).
//  If the area of both square is same the method should return `true` or `false`.
//  (Static methods are called directly on the class not in the instance)


class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }

    description() {
        alert(`The square is ${this.width} * ${this.height}`)
    }

    calcArea() {
        return this.width * this.height;
    }

    static isEqual(instance1, instance2) {
        if (instance1.calcArea() === instance2.calcArea()) {
            return true;
        }
        return false;
    }

    get area() {
        return this.calcArea();
    }

    set area(value) {
        let sides = value / 2;
        this.width = sides;
        this.height = sides;
    }
}


// 7 Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

let square1 = new Square(12);
let square2 = new Square(6);

// 8 - Check the `area` getter method on both square.

square1.area;
square2.area;

// 9 Check the `isEqual` method and pass the two instance you created above.

Square.isEqual(square1, square2); // false


// ## User Class

// 1 - Create a class named `User` that accepts `firstName` and `lastName` property

class User {
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }
}

// 2 - Create a getter method named `fullName` that will return the full name of the person.

class User {
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }

    get fullName() {
        return this.firstname + this.lastname;
    }
}

//  3 - Create a `fullName` setter method that will accept full name parameter of the person.
//  It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. 
// It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)

class User {
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }

    get fullName() {
        return this.firstname + this.lastname;
    }

    set fullName(full) {
        let arr = full.split(" ");
        if (full.length < 5) {
            alert(`Full name should be more than 5 characters`);
        } else {
            this.firstname = arr[0];
            this.lastname = arr[1];
        }
    }
}

//  4 - Create a method named `nameContains` which will accept string and will return `true` or `false` 
// based on if the name of the user contains the text that passed by user.

class User {
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastname = lastName;
    }

    get fullName() {
        return this.firstname + " " + this.lastname;
    }

    nameContains(str) {
        let fullname = this.firstname + this.lastname;
        if (fullname.includes(str)) {
            return true;
        }
        return false;
    }

    set fullName(full) {
        let arr = full.split(" ");
        if (full.length < 5) {
            alert(`Full name should be more than 5 characters`);
        } else {
            this.firstname = arr[0];
            this.lastname = arr[1];
        }
    }
}

// 5 - Create two instance of the `User` class

let user1 = new User("Arya", "Stark");
let user2 = new User("Vikas", "Singh");

// 6 - Check by using the `fullName` setter method with name bigger than 5 characters.

user1.fullName = "Prerna Sharma";
user2.fullName = "Ankit Singh";

// 7 -  Check by using the `fullName` setter method with name less than 5 characters.

user1.fullName = "zoya";
user2.fullName = "Aman";

// 8 - Check the `fullName` using getter

user1.fullName;
user2.fullName;

// 9 - Check the `nameContains` method

user1.nameContains("A");