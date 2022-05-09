// let form = document.querySelector("form");
// let previous = document.querySelector(".btn-secondary");


// class Question {
//     constructor(title, options, correctAnswerIndex) {
//         this.title = title;
//         this.options = options;
//         this.correctAnswerIndex = correctAnswerIndex;
//     }
//     isCorrect(answer) {
//         if (answer === this.options[this.correctAnswerIndex]) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     getCorrectAnswer() {
//         let arr = this.options;
//         return arr[this.correctAnswerIndex];
//     }

//     createUI() {
//         let fieldset = document.createElement("fieldset");
//         let legend = document.createElement("legend");
//         legend.innerText = this.title;

//         this.options.forEach(function(elm, i) {
//             let div = document.createElement("div");
//             let input = document.createElement("input");
//             input.type = "radio";
//             input.id = i;
//             input.name = "options";
//             input.value = elm;

//             let label = document.createElement("label");
//             label.innerText = elm;
//             label.setAttribute("for", i);

//             div.append(input, label);
//             fieldset.append(div)
//         })
//         fieldset.prepend(legend);

//         let btn = document.createElement("button");
//         btn.className = "btn-primary";
//         btn.setAttribute("type", "submit");
//         btn.innerText = "Submit";
//         fieldset.append(btn);
//         return form.append(fieldset);
//     }
// }


// let variableToGetNextQuestion = 0;

// class Quiz {
//     constructor(allQestions = [], score = 0) {
//         this.allQestions = allQestions;
//         this.activeIndex = 0;
//         this.score = score;
//         this.answers = [];
//     }

//     increamentScore() {
//         this.score += 1;
//         return this.score;
//     }

//     decrementScore() {
//         this.score -= 1;
//         return this.score;
//     }

//     add(title, options, correctAnswerIndex) {
//         let question = new Question(title, options, correctAnswerIndex);
//         this.allQestions.push(question);
//         return this.allQestions.length;
//     }

// nextQuestion() {
//     return this.allQestions[++variableToGetNextQuestion];
// }

// previousQuestion() {
//     return this.allQestions[--variableToGetNextQuestion];
// }


//     createUI() {
//         let activeQuestion = this.allQestions[this.activeIndex];
//         activeQuestion.createUI();

//         let btnOfSubmit = document.querySelector(".btn-primary");
//         btnOfSubmit.addEventListener("click", () => {
//             event.preventDefault();
//             let input = document.querySelectorAll("input");
//             input = Array.from(input);
//             for (let elm of input) {
//                 if (elm.checked) {
//                     var inputCheckedValue = elm.value;
//                 }
//             }
//             if (activeQuestion.isCorrect(inputCheckedValue)) {
//                 this.increamentScore();
//                 let obj = {id: this.activeIndex, isCorrect: true};
//                 this.answers.push(obj);
//             } else {
//                 this.decrementScore();
//                 let obj = { id: this.activeIndex, isCorrect: false };
//                 this.answers.push(obj);
//             }
//         })


//         let next = document.querySelector(".btn-tertiary");
//         next.addEventListener("click", () => {
//             form.innerHTML = "";

//             let func = this.nextQuestion.call(this);
//             if (func === this.allQestions[this.allQestions.length - 1]) {
//                 next.classList.add("display-none")
//             }
//             next.classList.remove("dsiplay-none");
//             previous.classList.remove("display-none");
//             func.createUI();
//         })

//         let previous = document.querySelector(".btn-secondary");
//         previous.addEventListener("click", () => {
//             form.innerHTML = "";
//             next.classList.remove("display-none");
//             let func2 = this.previousQuestion();
//             if (func2 === this.allQestions[0]) {
//                 previous.classList.add("display-none");
//                 func2.createUI();
//             } else {

//                 func2.createUI();
//             }

//         })
//     }
// }

// let quiz = new Quiz();
// quiz.add("What is the capital of India ?", ["Delhi", "Rajpur", "Kanpur", "Pardesh"], 0);
// quiz.add("Test", [1, 2, 3, 4], 0);
// quiz.add("Test1234", [1, 1234562, 23453, 4], 2);
// quiz.createUI();











// .......................ANKIT SIR'S WAY OF CREATING QUIZ APP.........................

let form = document.querySelector("form");
let previous = document.querySelector(".btn-secondary");
let next = document.querySelector(".btn-tertiary");
let main = document.querySelector("main");
let showResult = document.querySelector(".show-result");


class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(answer) {
        return this.options[this.correctAnswerIndex] === answer;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}



class Quiz {
    constructor(questions = [], score = 0) {
        this.questions = questions;
        this.activeIndex = 0;
        this.score = score;
    }
    add(title, options, correctAnswerIndex) {
        let question = new Question(title, options, correctAnswerIndex);
        this.questions.push(question);
    }

    nextQuestion() {
        this.activeIndex = this.activeIndex + 1;
        this.createUI();
    }

    previousQuestion() {
        this.activeIndex = this.activeIndex - 1;
        this.createUI();
    }

    incrementScore() {
        this.score = this.score + 1;
    }


    handleButtons() {
        if (this.activeIndex === 0) {
            previous.style.visibility = "hidden";
        } else if (this.activeIndex === this.questions.length - 1) {
            next.style.visibility = "hidden";
            showResult.classList.remove("display-none");
        } else {
            previous.style.visibility = "visible";
            next.style.visibility = "visible";
            showResult.classList.add("display-none");
        }
    }

    createUI() {
        main.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];
        let form = document.createElement("form");
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = activeQuestion.title;

        // console.log(this);
        // let incrementScore = this.incrementScore.bind(this);

        activeQuestion.options.forEach((elm, i) => {
            let div = document.createElement("div");
            let input = document.createElement("input");
            input.type = "radio";
            input.id = i;
            input.name = "options";
            input.value = elm;

            let label = document.createElement("label");
            label.innerText = elm;
            label.setAttribute("for", i);

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                if (input.checked) {
                    if (activeQuestion.isCorrect(input.value)) {
                        this.incrementScore();
                    }
                }
            })

            div.append(input, label);
            fieldset.append(div)
        });
        fieldset.prepend(legend);
        this.handleButtons();

        let btn = document.createElement("button");
        btn.className = "btn-primary";
        btn.setAttribute("type", "submit");
        btn.innerText = "Submit";
        fieldset.append(btn);

        form.append(fieldset);

        return main.append(form);
    }
}

function init() {
    let quiz = new Quiz();

    next.addEventListener("click", quiz.nextQuestion.bind(quiz));
    previous.addEventListener("click", quiz.previousQuestion.bind(quiz));

    quiz.add("What is the capital of India ?", ["Delhi", "Rajpur", "Kanpur", "Pardesh"], 0);
    quiz.add("Test", [1, 2, 3, 4], 0);
    quiz.add("Test1234", [1, 1234562, 23453, 4], 2);
    quiz.createUI();

    showResult.addEventListener("click", () => {
        alert(`Your score ${quiz.score}`);
    })
}


init();