
let dicenum = prompt("Sisesta täringute arv: ");
mynums = "<ul>";
for(i = 0; i< dicenum; i++) {
    mynums += "<li>" +  Math.round((Math.random() * 5) + 1) + "</li>";
    console.log(mynums);
}
mynums += "</ul>";
document.getElementById("emptyspace").innerHTML = mynums;
