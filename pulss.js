age = prompt("sisesta vanus: ");
sex = prompt("sisesta sugu: ");
traintype = prompt("kas 1, 2 v 3");
if(sex == "m" || sex == "M" && traintype == 1) {
	frequencymin = (220 - age) * 0.5;
	frequencymax = (220  - age) * 0.7;
	console.log("Pulsisagedus peaks olema vahemikus" + frequencymin + "kuni" + frequencymax);
}
else if(sex == "m" || sex == "M" && traintype == 2) {
	frequencymin = (220 - age) * 0.7;
	frequencymax = (220 - age) * 0.8;
	console.log("Pulsisagedus peaks olema vahemikus" + frequencymin + "kuni" + frequencymax);
}


console.log(age);
console.log(sex);

