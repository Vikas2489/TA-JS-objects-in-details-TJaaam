// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// Using function to create object

// function user(name, id, noOfProjects) {
//     let obj = {};
//     obj.name = name;
//     obj.id = id;
//     obj.noOfProjects = noOfProjects;
//     obj.getProjects = function() {
//         return obj.noOfProjects;
//     };
//     obj.changeName = function(newName) {
//         let previousName = obj.name;
//         obj.name = newName;
//         return previousName;
//     }
//     obj.incrementProject = function() {
//         obj.noOfProjects += 1;
//         return obj.noOfProjects;
//     };
//     obj.decrementProject = function(num) {
//         obj.noOfProjects -= 1;
//         return obj.noOfProjects;
//     }
//     return obj;
// }

// let user1 = user("vikas", 1, 200);
// let user2 = user("Shelly", 2, 30);

// console.group(user1.name);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.noOfProjects);
// console.log(user1.incrementProject());
// console.log(user1.changeName("Rupali"));
// console.log(user1.decrementProject());
// console.groupEnd();

// console.group(user2.name);
// console.log(user2.name);
// console.log(user2.id);
// console.log(user2.noOfProjects);
// console.log(user2.incrementProject());
// console.log(user2.changeName("Rupali"));
// console.log(user2.decrementProject());
// console.groupEnd();


// Using Object.create (prototypal pattern)


// let userMethods = {
//     changeName(newName) {
//         let previousName = this.name;
//         this.name = newName;
//         return previousName;
//     },
//     incrementProject() {
//         this.noOfProjects += 1;
//         return this.noOfProjects;
//     },
//     decrementProject(num) {
//         this.noOfProjects -= 1;
//         return this.noOfProjects;
//     }
// }

// function user(name, id, noOfProjects) {
//     let obj = Object.create(userMethods);
//     obj.name = name;
//     obj.id = id;
//     obj.noOfProjects = noOfProjects;
//     return obj;
// }

// let user1 = user("vikas", 1, 200);
// let user2 = user("Shelly", 2, 30);

// console.group(user1.name);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.noOfProjects);
// console.log(user1.incrementProject());
// console.log(user1.changeName("Rupali"));
// console.log(user1.decrementProject());
// console.groupEnd();

// console.group(user2.name);
// console.log(user2.name);
// console.log(user2.id);
// console.log(user2.noOfProjects);
// console.log(user2.incrementProject());
// console.log(user2.changeName("Rupali"));
// console.log(user2.decrementProject());
// console.groupEnd();


// Using Pseudoclassical Way

// function User(name, id, noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// }

// User.prototype = {
//     changeName(newName) {
//         let previousName = this.name;
//         this.name = newName;
//         return previousName;
//     },
//     incrementProject() {
//         this.noOfProjects += 1;
//         return this.noOfProjects;
//     },
//     decrementProject(num) {
//         this.noOfProjects -= 1;
//         return this.noOfProjects;
//     }
// }

// let user1 = new User("vikas", 1, 200);
// let user2 = new User("Shelly", 2, 30);


// console.group(user1.name);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.noOfProjects);
// console.log(user1.incrementProject());
// console.log(user1.changeName("Rupali"));
// console.log(user1.decrementProject());
// console.groupEnd();

// console.group(user2.name);
// console.log(user2.name);
// console.log(user2.id);
// console.log(user2.noOfProjects);
// console.log(user2.incrementProject());
// console.log(user2.changeName("Rupali"));
// console.log(user2.decrementProject());
// console.groupEnd();


// Using class

class User {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    changeName(newName) {
        let previousName = this.name;
        this.name = newName;
        return previousName;
    }
    incrementProject() {
        this.noOfProjects += 1;
        return this.noOfProjects;
    }
    decrementProject(num) {
        this.noOfProjects -= 1;
        return this.noOfProjects;
    }
}



let user1 = new User("vikas", 1, 200);
let user2 = new User("Shelly", 2, 30);


console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.incrementProject());
console.log(user1.changeName("Rupali"));
console.log(user1.decrementProject());
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.incrementProject());
console.log(user2.changeName("Chetna"));
console.log(user2.decrementProject());
console.groupEnd();