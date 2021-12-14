
const itemCtrl = (function() {
    const item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [

        ], total: 0
    }

    return {
        getitems: function() {
            return data.items;
        },
        logData: function() {
            return data
        },
        addItem: function(name, calories) {
            console.log(name);
            console.log(calories);
            let ID;
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1
                console.log(ID);
            }
            else {
                ID = 0
            }
            calories = parseInt(calories);
            let newItem = new item(ID, name, calories);
            data.items.push(newItem);
            console.log(data.items);
            console.log(newItem);
            return newItem;
        },
        getTotalCalories: function() {
            let total = 0;
            data.items.forEach(function(item) {
                total += item.calories;
                console.log(total);
            });
            return total;
        }
    }
} ) ();

const UICtrl = (function() {
    const UISelectors = {
        itemlist: '#item-list',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        addBtn: '.add-btn',
        totalCalories: '.total-calories'
    }
    return {
        populateItemList: function (items) {
            let html = "";
            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong> ${item.name}: </strong> <em> ${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"> </i>
                </a>
                </li>`;
            });
            document.querySelector(UISelectors.itemlist).innerHTML = html;
        },
        getSelectors: function() {
            return UISelectors;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item) {
            const li = document.createElement("li");
            li.className = "collection-item";
            li.id = `item ${item.id}`;
            li.innerHTML = `<strong> ${item.name} :</strong> <em> ${item.calories} Calories </em>
            <a href="#" class="secondary-content"> <i class="edit-item fa fa-pencil"> </i></a>`;
            console.log(li);

            document.querySelector(UISelectors.itemlist).insertAdjacentElement("beforeend", li);

        },
        clearInput: function() {
          document.querySelector(UISelectors.itemNameInput).value = "";
          document.querySelector(UISelectors.itemCaloriesInput).value = "";
        },
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        }

    }
}) ();


const App = (function(itemCtrl, UICtrl) {
    const loadEventListeners = function() {
        console.log("event loaders loading")
        const UISelectors = UICtrl.getSelectors();
        console.log(UISelectors);
        document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

    }
    const itemAddSubmit = function(event) {
        console.log("itemaddeventfunction");
        const input= UICtrl.getItemInput();
        if(input.name !== "" && input.calories !== "") {
            const newItem = itemCtrl.addItem(input.name, input.calories);
            console.log(newItem);
            UICtrl.addListItem(newItem);
            const totalCalories = itemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);
            UICtrl.clearInput();

        }
        event.preventDefault();
    }

    return {
        init : function() {
            console.log("initializing app");
            const items = itemCtrl.getitems();
            console.log(items);
            UICtrl.populateItemList(items);
            loadEventListeners();


        }
    }
}) (itemCtrl, UICtrl);



App.init();
