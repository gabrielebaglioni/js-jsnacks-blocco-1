//creo un array vuoto 
//chiedo per 6 volte automaticamente un numero all'utente
//se è dispari lo inserisco nell'array
const numeridispari = [];
for( let i=0 ; i < 6 ; i++){
   let numero = Number(prompt("inserisci un numero"));
   if (numero % 2 !== 0){
      numeridispari.push(numero);
   }
}
console.log(numeridispari)