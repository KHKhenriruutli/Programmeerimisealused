class LS {

    getData(name) {
        let data;
        if(localStorage.getItem(name) === null) {
            data = [];
        }
        else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data;

    }
    setData(name, data) {
        localStorage.setItem(name, JSON.stringify(data))

    }

    addtolocalstorage(book) {
        let books = this.getData("books");
        books.push(book);

        this.setData("books", books);

    }

    delBook(book) {
        let books = this.getData("books")
        books.forEach(function (value, index) {
            if(value.title === book.title) {
                books.splice(index, 1);
            }




        });
        this.setData("books", books)

    }

}