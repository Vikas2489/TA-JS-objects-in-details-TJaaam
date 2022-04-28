class BookList {
    constructor(books = []) {
        this.books = books;
    }
    add() {
        let book = new Books(nameOfTheBook, author);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    delete(id) {
        let index = this.books.findIndex((book) => book.isbn = id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }

    createUI() {
        this.books.forEach((book) => {
            book.createUI();
        })
    }
}

class Books {
    constructor(nameOfTheBook, author) {
        this.name = nameOfTheBook;
        this.author = author;
        this.isbn = Date.now();
    }
    createUI() {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = this.name;
        let td2 = document.createElement("td");
        td2.innerText = this.author;
        let td3 = document.createElement("td");
        td3.innerText = this.isbn;
        let td4 = document.createElement("td");
        td4.innerText = "❌";
        tr.append(td1, td2, td3, td4);
        document.querySelector("table").append(tr);
        return tr;
    }
}

let allBook = new BookList();

let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let button = document.querySelector(".btn");


function getTitle(event) {
    if (event.keycode === 13) {
        console.log(event.target.innerText);
        return event.target.innerText;
    }
}

title.addEventListener("keyup", () => {
    if (event.keycode === 13)
        return event.target.value;
});

function handleBtn(event) {
    let bookObj = new Books();
    console.log(bookObj);
    if (title.innerText === "") {
        return alert(`Title cannot be empty`);
    } else if (author.innerText === "") {
        return alert(`Title cannot be empty`);
    }
}

button.addEventListener("click", handleBtn);