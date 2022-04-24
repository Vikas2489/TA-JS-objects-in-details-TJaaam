/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

// Inside `personStore` object, create a property `greet` where the value is a function that logs "hello".

var personStore = {
    greet: function() {
        console.log("hello");
    }
}

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// Create a function `personFromPersonStore` that takes as input a `name` and an `age`. 
// When called, the function will create person objects using the 
// `Object.create` method on the `personStore` object. And return the object with age and name.

function personFromPersonStore(name, age) {
    let person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

// var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
    this.greet = function() {
            console.log("hello");
        },
        this.introduce = function() {
            console.log(`Hey,my name is ${this.name}`)
        }
}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
    let obj1 = new PersonConstructor();
    obj1.name = name;
    obj1.age = age;
    return obj1;
}

var mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// Without editing the code you've already written, add an `introduce` method to the
//  `PersonConstructor` function that logs "Hi, my name is [name]".

// add code here

mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

// Create a class `PersonClass`. `PersonClass` should have a constructor that is passed 
// an input of `name` and saves it to a property by the same name. 
// `PersonClass` should also have a method called `greet` that logs the string 'hello'.

class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("hello");
    }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// Create a class `DeveloperClass` that creates objects by extending the `PersonClass` class. 
// In addition to having a `name` property and `greet` method, `DeveloperClass` should have an 
// `introduce` method.
//  When called, `introduce` should log the string 'Hello World, my name is [name]'.

class DeveloperClass extends PersonClass {
    constructor(name) {
        super(name);
    }
    introduce() {
        console.log(`Hello World, my name is ${this.name}`);
    }
}

// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/



var userFunctionStore = {
    sayType: function() {
        console.log('I am a ' + this.type);
    },
};

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = 'User';
    user.name = name;
    user.score = score;
    return user;
}

// Create an object `adminFunctionStore` that has access to
//  all methods in the `userFunctionStore` object, without copying them over individually.

var adminFunctionStore = Object.create(userFunctionStore);

// Create an `adminFactory` function that creates an object with all the same data fields (and default values)
//  as objects of the `userFactory` class, but without copying each data field individually.

function adminFactory(name, score) {
    let obj2 = userFactory(name, score);
    Object.setPrototypeOf(obj2, adminFunctionStore);
    obj2.type = "Admin";
    obj2.score = score;
    return obj2;
}

/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function() {
    console.log("Welcome Users");
}

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"