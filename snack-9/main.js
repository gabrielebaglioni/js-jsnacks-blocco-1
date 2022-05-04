// creare due array con numero elementi diversi
// creare un ciclo for che aggiunge gli elemeti al più piccolo
const array1 = [1] //[1, 2, 3, 4, 5, 6, 7, 8,]
const array2 = [1, 2, 3]
// definisco una variabile da stampare con la differenza delle lunghezze 
let differenza = 0
 if (array1.length > array2.length){
   const differenza =array1.length - array2.length;
   console.log(differenza);
   // inserisco nell'array minore il numero di elementi mancanti
   for(let i = 0 ; i < differenza; i++){
      array2.push(Math.floor(Math.random()*100) + 1);
   }
 }
 else if ( array1.length < array2.length){
    const differenza = array2.length - array1.length;
    console.log(differenza);
    for(let i = 0 ; i < differenza; i++){
      array1.push(Math.floor(Math.random()*100) + 1);
    }
    
 }
console.log(array1);
console.log(array2);
