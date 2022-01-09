
const ui = new UI();
const ls = new LS();

const form = document.querySelector("#book-form");
const titleinput = document.querySelector("#entertitle");
const authorinput = document.querySelector("#enterauthor");
const isbninput = document.querySelector("#enterisbn");
const booklist = document.querySelector("#book-list");



form.addEventListener("submit", addbook);
document.addEventListener("DOMContentLoaded", getBooksFromLocalStorage);
booklist.addEventListener("click", delbook);



function getBooksFromLocalStorage() {
    let books = ls.getData("books");
    for(let i = 0; i < books.length; i++) {
        let book = books[i];
        ui.addbook(book);
    }
}

function addbook(event) {
    let title = titleinput.value;
    let author = authorinput.value;
    let isbn = isbninput.value;

    const book = new Book(title, author, isbn);

    ui.addbook(book);

    ls.addtolocalstorage(book);




    event.preventDefault();
}

function delbook(event){
    if(event.target.textContent === "X") {
        const book = ui.getbook(event.target)
        if(ui.delbook(event.target) === true ){
            ls.delBook(book)
        }
    }

}






