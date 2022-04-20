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



function user(name, id, noOfProjects) {
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;
    obj.getProjects = function() {
        return obj.noOfProjects;
    };
    obj.changeName = function(newName) {
        // obj.name = newName;
        return obj.name;
    }
    obj.incrementProject = function(num) {
        obj.noOfProjects = obj.noOfProjects + num;
        return obj.noOfProjects;
    };
    obj.decrementProject = function(num) {
        obj.noOfProjects = obj.noOfProjects - num;
        return obj.noOfProjects;
    }
    return obj;
}

let user1 = user("vikas", 1, 2);