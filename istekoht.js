/* 1/3 akna ääres
	2/3 mujal
*/

choice = prompt("ise valida?");
minnum = 1;
maxnum = 4;
if (choice == "yes") {
	choice1 = prompt("aknaääres yes?");
		if(choice1 == "aken") {
			console.log("aknakoht it is!")
		}
		else if(choice1 == "muu") {
			randomnum = Math.round(Math.random() * 2) ; 
		
			if(randomnum == 0) {
				alert("loos aknakoht");

			}
			else if(randomnum == 1 || randomnum == 2) {
				alert("loos mujal");
			}
		}
	}
else if (choice == "no") {
	randomnum = Math.round(Math.random() * 2) ; 
		
			if(randomnum == 0) {
				alert("loos aknakoht");

			}
			else if(randomnum == 1 || randomnum == 2) {
				alert("loos mujal");
			}
}

