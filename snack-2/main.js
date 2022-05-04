const parola1 = prompt("inserisci una parola");
const parola2 = prompt("inserisci una parola");

if(parola1.length > parola2.length){
   console.log(parola1);
}
else if (parola1.length < parola2.length){
   console.log(parola2)
}
else{
   console.log("sono lunghe uguali")
}