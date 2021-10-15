inimesteArv = prompt("Sisesta inimeste arv: ");
kohtadeArvBussis = prompt("Sisesta kohtade arv bussis");
bussideArv = Math.floor(inimesteArv / kohtadeArvBussis);
mahaJaanud = inimesteArv % kohtadeArvBussis;
if (mahaJaanud > 0 ) {
	bussideArv += 1;
}



console.log(inimesteArv);
console.log(kohtadeArvBussis);
console.log("Busside arv = "+ bussideArv);
