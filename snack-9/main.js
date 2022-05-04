// creare due array con numero elementi diversi
// creare un ciclo for che aggiunge gli elemeti al più piccolo
const array1 = [1,]
const array2 = [1, 2]
// definisco una costante che faccia la differenza tra le lunghezze dei due array per capire 
//se è maggiore o uguale a 0
let differenza = 0
 if (array1.length > array2.length){
   const differenza =array1.length - array2.length;
   console.log(differenza);
 }
 else if ( array1.length < array2.length){
    const differenza = array2.length - array1.length;
    console.log(differenza);
 }
//  let differenza= corto.length - lungo.length;
 //se la differenza è maggiore di zero allora creao un ciclo for per sommare gli elementi
//  if (differenza>0){
//     for(let i = 0;)
//  }
