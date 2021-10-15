let xmany = prompt("mitu pöialpoissi tahab õunu: ");
let ynum = 14;
let mynums = "<ul>";
for(i= 0; i<xmany; i++) {
    xnum = Math.round(Math.random()) + 1;
    mynums += "<li>" + xnum + "</li>";
    ynum -= xnum;
}
mynums += "</ul>";
mynums += "ja lumivalgekesele jäi " + ynum + "õuna alles";
document.getElementById("emptyspace").innerHTML = mynums;

