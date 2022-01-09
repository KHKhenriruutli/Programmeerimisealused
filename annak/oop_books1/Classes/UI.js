class UI {
    addUIelement(name, classname = "", textcontent = "", attributes = {}) {
        const element = document.createElement(name);
        if (classname !== "") {
            element.className = classname;
        }
        element.appendChild(document.createTextNode(textcontent));
        if (Object.keys(attributes).length > 0) {
            for (let key in attributes) {
                element.setAttribute(key, attributes[key]);
            }

        }
        return element;


    }

    addbook(book) {
        const mytable = document.querySelector("#book-list")
        const tr = this.addUIelement("tr");

        for (let i in book) {
            let td = this.addUIelement("td", "", book[i]);
            tr.appendChild(td);
        }
        let td = this.addUIelement("td");
        let link = this.addUIelement("a", "", "X", {"href": "#"});
        td.appendChild(link);
        tr.appendChild(td);
        mytable.appendChild(tr);


    }
    getbook(click) {
        let isbn = click.parentElement.previousElementSibling.textContent;
        let author = click.parentElement.previousElementSibling.previousElementSibling.textContent;
        let title = click.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        return new Book(title, author, isbn)

    }

    delbook(click) {
        if(confirm("Do you want to delete?")) {
            click.parentElement.parentElement.remove()
            return true
        }
        else {
            return false
        }
    }


}
