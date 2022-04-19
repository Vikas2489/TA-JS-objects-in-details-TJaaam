// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)



// - Without Object
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

// function and methods
function isAnswerCorrect(index) {
    return index === correctAnswerIndex;
}

function getCorrectAnswer() {
    return options[correctAnswerIndex];
}


// Organize using object
let obj = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index) {
        return index === obj.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return obj.options[obj.correctAnswerIndex];
    }
}

// Use a function to create object
function createObj(title, options, correctAnswerIndex) {
    let obj1 = {};
    obj1.title = title;
    obj1.options = options;
    obj1.correctAnswerIndex = correctAnswerIndex;
    obj1.isAnswerCorrect = function(index) {
        return index === obj1.correctAnswerIndex;
    };
    obj1.getCorrectAnswer = function() {
        return obj1.options[obj1.correctAnswerIndex];
    }
    return obj1;
}

let first = createObj('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)


// Convert the function to use `this` keyword

function createObj1(title, options, correctAnswerIndex) {
    let obj2 = {};
    obj2.title = title;
    obj2.options = options;
    obj2.correctAnswerIndex = correctAnswerIndex;
    obj2.isAnswerCorrect = function(index) {
        return index === this.correctAnswerIndex;
    };
    obj2.getCorrectAnswer = function() {
        return this.options[this.correctAnswerIndex];
    }
    return obj2;
}

let second = createObj1('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)