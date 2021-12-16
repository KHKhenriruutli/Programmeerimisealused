class UI {
    addUIelement(name, classname = "", textcontent = "", attributes = {}) {
        const element = document.createElement(name);
        if(classname !== "") {
            element.className = classname;
        }
        element.appendChild(document.createTextNode(textcontent));
        if(Object.keys(attributes).length > 0 ) {
            for(let key in attributes) {
                element.setAttribute(key, attributes[key]);
            }

        }
        return element;



    }
    addbook(book) {
        const mytable = document.querySelector("#book-list")
        const tr = this.addUIelement("tr");

        for(let i in book) {
            let td = this.addUIelement("td", "", book[i]);
            tr.appendChild(td);
        }
        let td = this.addUIelement("td");
        let link = this.addUIelement("a", "", "X", {"href": "#"});
        td.appendChild(link);
        tr.appendChild(td);
        mytable.appendChild(tr);



    }

    delBook(e) {
        let task;
        if (e.target.textContent == "X") {
            if (confirm("delete this?")) {
                e.target.parentElement.remove();
                let words = "";
                for (let i = 0; i < 3; i++) {
                    task = e.target.parentElement.children[i].textContent;
                    words += task;
                }

                ls.delBook(words);


            }
        }

    }

}