// # Inheritance

// Convert the below requirements into inheritance using prototypal patterns.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let method1 = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation) {
        this.location = newLocation;
    },
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}

function createAnimal(location, numberOfLegs) {
    let animal = Object.create(method1);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

let method2 = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName) {
        this.name = newName;
        return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
}

function createDog(name, color, location, numberOfLegs) {
    let dog = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(dog, method2);
    dog.name = name;
    dog.color = color;
    return dog;
}


Object.setPrototypeOf(method2, method1);



// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

let method3 = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName(newName) {
        this.name = newName;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

function createCat(name, colorOfEyes, location, numberOfLegs) {
    let cat = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(cat, method3);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}


Object.setPrototypeOf(method3, method1);