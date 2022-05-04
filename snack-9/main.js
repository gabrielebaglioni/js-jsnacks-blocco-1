// creare due array con numero elementi diversi
// creare un ciclo for che aggiunge gli elemeti al più piccolo
const array1 = [1, 2, 3, 4,]
const array2 = [1, 2]
// definisco una costante che faccia la differenza tra le lunghezze dei due array per capire 
//se è maggiore o uguale a 0
let differenza = 0
 if (array1.length > array2.length){
   const differenza =array1.length - array2.length;
   console.log(differenza);
   for(let i = 0 ; i < differenza; i++){
      array2.push(Math.floor(Math.random()*100) + 1);
      
   }
 }
 else if ( array1.length < array2.length){
    const differenza = array2.length - array1.length;
    console.log(differenza);
    array2.push(Math.floor(Math.random()*100) + 1);
 }
console.log(array1);
console.log(array2);
 //se la differenza è maggiore di zero allora creao un ciclo for per sommare gli elementi
 //inserire il numero della differenza aggiungere ad un array
