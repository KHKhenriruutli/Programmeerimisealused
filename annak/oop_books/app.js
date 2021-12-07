const form = document.querySelector("form");
const titleinput = document.querySelector("#entertitle");
const authorinput = document.querySelector("#enterauthor");
const isbninput = document.querySelector("#enterisbn");



const ui = new UI();


form.addEventListener("submit", addbook);

function addbook(event) {
    let title = titleinput.value;
    let author = authorinput.value;
    let isbn = isbninput.value;

    const book = new Book(title, author, isbn);

    ui.addbook(book);



    event.preventDefault();
}


