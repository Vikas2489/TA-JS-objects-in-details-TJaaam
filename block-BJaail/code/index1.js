class BookList {
    constructor(books = []) {
        this.books = books;
    }
    add(name, author, isbn) {
        let book = new Books(name, author, isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    delete(id) {
        let index = this.books.findIndex(function(book) {
            return book.isbn === id;
        });
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }

    createUI() {
        document.querySelector(".table").innerHTML = "";
        this.books.forEach((book) => {
            let ui = book.createUI();
            ui.querySelector(".delete-btn").addEventListener("click", () => {
                // console.log(ui.querySelector(".isbn").innerText);
                // console.log(typeof ui.querySelector(".isbn").innerText);
                this.delete(Number(ui.querySelector(".isbn").innerText));
            })
        })
    }
}

class Books {
    constructor(nameOfTheBook, author, isbn1 = Date.now()) {
        this.name = nameOfTheBook;
        this.author = author;
        this.isbn = isbn1;
    }
    createUI() {
        let tr = document.createElement("tr");
        tr.classList.add("flex");
        let td1 = document.createElement("td");
        td1.innerText = this.name;
        td1.classList.add = "text-center";
        let td2 = document.createElement("td");
        td2.innerText = this.author;
        td2.classList.add = "text-center";
        let td3 = document.createElement("td");
        td3.className = "isbn";
        td3.classList.add = "text-center";
        td3.innerText = this.isbn;
        let td4 = document.createElement("td");
        td4.className = "delete-btn";
        td4.classList.add = "text-center";
        td4.innerText = "❌";
        tr.append(td1, td2, td3, td4);
        document.querySelector(".table").append(tr);
        return tr;
    }
}


let library = new BookList();

let form = document.querySelector("form");
let title = form.elements.bookName;
let isbn1 = form.elements.bookIsbn;
let author1 = form.elements.bookAuthor;

function handleSubmit(event) {
    event.preventDefault();
    let name = title.value;
    let author = author1.value;
    let isbn = isbn1.value;
    library.add(name, author, isbn);
}


form.addEventListener("submit", handleSubmit);