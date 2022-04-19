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
        return obj.options[correctAnswerIndex];
    }
}

// Use a function to create object
function createObj() {
    let obj1 = {};
    obj1.title = 'Where is the capital of Jordan';
    obj1.options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
    obj1.correctAnswerIndex = 1;
    obj1.isAnswerCorrect = function(index) {
        return index === obj1.correctAnswerIndex;
    };
    obj1.getCorrectAnswer = function() {
        return obj1.options[correctAnswerIndex];
    }
    return obj1;
}


// Convert the function to use `this` keyword

function createObj() {
    let obj1 = {};
    obj1.title = 'Where is the capital of Jordan';
    obj1.options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
    obj1.correctAnswerIndex = 1;
    obj1.isAnswerCorrect = function(index) {
        return index === this.correctAnswerIndex;
    };
    obj1.getCorrectAnswer = function() {
        return this.options[correctAnswerIndex];
    }
    return obj1;
}