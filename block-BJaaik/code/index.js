class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {}
    sleep() {}
    walk() {}
}

class Player extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {}
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender, sportsName);
        this.teamName = this.teamName;
    }
    playCricket() {}
}

class Teacher extends Person {
    constructor(name, age, gender, institueName) {
        super(name, age, gender);
        this.institueName = institueName;
    }
    teach() {}
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender)
        this.kind = kind;
    }
    createArt() {

    }
}