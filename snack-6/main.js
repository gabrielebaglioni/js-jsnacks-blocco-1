// chiedi un numero all'utente
//stampalo se è pari 
// alrimenti stampa il numero successivos
const numero = Number(prompt("inserisci un numero"));
if (numero % 2 == 0){
   console.log(numero);
}
else {
   console.log(numero + 1)
}
