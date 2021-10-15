let repetitions = prompt("Mitu korda äratada: ");
let sisu = "<ul>";
console.log(sisu);
for(let i= 0; i<repetitions; i++) {
    sisu +=  "<li>tõuse ja sära </li>";
    console.log(sisu);
}
sisu += "</ul>";
console.log(sisu);
document.getElementById("emptyspace").innerHTML = sisu
