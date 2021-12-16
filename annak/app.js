
const itemcontroller = (function() {
    const item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [
            {id: 0, name: "Steak Dinner", calories: 1200},
            {id: 1, name: "Cookie", calories: 400},
            {id: 2, name: "Eggs", calories: 300}
        ], total: 0
    }
    return {
        getitems: function() {
            return data.items;
        },
        logData: function() {
            return data
        }
    }
} ) ();

const uicontroller = (function() {
    console.log("Uicontroller")
}) ();


const App = (function(itemcontroller, uicontroller) {

    return {
        init : function() {
            console.log("initializing app");
            const items = itemcontroller.getitems();
            console.log(items);
        }
    }
}) (itemcontroller, uicontroller);

const App1 = function(itemcontroller, uicontroller) {
    console.log("app1")
}
App1(itemcontroller, uicontroller);

App.init();

