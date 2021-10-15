let laps = prompt("sisesta ringide arv");
let carrots = 0;
for(let i= 0; i<=laps; i ++) {
    if((i % 2) == 0) {
        carrots += i;

    }
    else {
        continue
    }

    
}
document.getElementById("emptyspace").innerHTML = "Porgandite koguarv on" + " "+ carrots;