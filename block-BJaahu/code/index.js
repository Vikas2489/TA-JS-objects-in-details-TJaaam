// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)


// - PROTOTYPAL PATTERN of object creation (Put methods inside an object and create object using Object.create)

// let questionMethods = {
//     isAnswerCorrect(index) {
//         return this.correctAnswerIndex === index;
//     },
//     getCorrectAnswer() {
//         return this.options[this.correctAnswerIndex];
//     }
// }

// function Question(title, options, correctAnswerIndex) {
//     let obj = Object.create(questionMethods);
//     obj.title = title;
//     obj.options = options;
//     obj.correctAnswerIndex = correctAnswerIndex;

//     return obj;
// }

// let firstQuestion = new Question(
//     'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );
// let secondQuestion = new Question(
//     'Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
// );

// console.group(firstQuestion.title);
// console.log(firstQuestion.title);
// console.log(firstQuestion.options);
// console.log(firstQuestion.correctAnswerIndex);
// console.log(firstQuestion.getCorrectAnswer());
// console.log(firstQuestion.isAnswerCorrect(2));
// console.groupEnd();

// console.group(secondQuestion.title);
// console.log(secondQuestion.title);
// console.log(secondQuestion.options);
// console.log(secondQuestion.correctAnswerIndex);
// console.log(secondQuestion.getCorrectAnswer());
// console.log(secondQuestion.isAnswerCorrect(2));
// console.groupEnd();


// PSEUDOCLASSICAL PATTERN (Put methods inside F.prototype and use `new` to call function)

// function Question(title, options, correctAnswerIndex) {
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }


// Question.prototype = {
//     isAnswerCorrect(index) {
//         return this.correctAnswerIndex === index;
//     },
//     getCorrectAnswer() {
//         return this.options[this.correctAnswerIndex];
//     }
// }


// let firstQuestion = new Question(
//     'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// );
// let secondQuestion = new Question(
//     'Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
// );

// console.group(firstQuestion.title);
// console.log(firstQuestion.title);
// console.log(firstQuestion.options);
// console.log(firstQuestion.correctAnswerIndex);
// console.log(firstQuestion.getCorrectAnswer());
// console.log(firstQuestion.isAnswerCorrect(2));
// console.groupEnd();

// console.group(secondQuestion.title);
// console.log(secondQuestion.title);
// console.log(secondQuestion.options);
// console.log(secondQuestion.correctAnswerIndex);
// console.log(secondQuestion.getCorrectAnswer());
// console.log(secondQuestion.isAnswerCorrect(2));
// console.groupEnd();


// CLASS PATTERN

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
        return this.correctAnswerIndex === index;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }

}


let firstQuestion = new Question(
    'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new Question(
    'Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);

console.group(firstQuestion.title);
console.log(firstQuestion.title);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswerIndex);
console.log(firstQuestion.getCorrectAnswer());
console.log(firstQuestion.isAnswerCorrect(2));
console.groupEnd();

console.group(secondQuestion.title);
console.log(secondQuestion.title);
console.log(secondQuestion.options);
console.log(secondQuestion.correctAnswerIndex);
console.log(secondQuestion.getCorrectAnswer());
console.log(secondQuestion.isAnswerCorrect(2));
console.groupEnd();

// Basically new keyword automates these given steps for ourselves.
// First of all it creates an object named this inside the function return the newly created object.
// and it pushes the methods into dunder proto of new object  from the functions prototype.