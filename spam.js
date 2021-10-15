/* Välja filtreeritud: 
Pole pealkirja
Sisaldab manusena faili ja suurus üle 1mb
*/

lsize = prompt("kirja suurus? mb");
ltitle = prompt("teema pealkiri?");
lfile = prompt("sisaldab faili?");

if (lsize < 1 && ltitle.length > 0 && lfile == "no") {
	console.log("kiri ei ole spämm");
}
else { 
	console.log("kiri on spämm");
}

