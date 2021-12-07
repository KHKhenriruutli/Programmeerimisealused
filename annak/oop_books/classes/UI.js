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
        const mytable = document.querySelector("table");
        const tr = this.addUIelement("tr");

        for(let i in book) {
            console.log(i);
            console.log(book[i]);
            let td = this.addUIelement("td", "", book[i]);
            tr.appendChild(td);
            console.log(td);
            console.log(tr);
        }
        let td = this.addUIelement("td");
        let link = this.addUIelement("a", "", "X", {"href": "#"});
        td.appendChild(link);
        tr.appendChild(td);
        mytable.append(tr);



    }

}