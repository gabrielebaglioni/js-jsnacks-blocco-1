//creare un array di numeri interi
//selezionare gli elementi in posizione dispari
//sommare gli elementi selezionati
const numeriInteri =[1, 2, 3, 4];
let somma = 0;
for (let i = 0; i < numeriInteri.length; i++){
    if(i%2===1)
    somma += numeriInteri[i];
}
console.log(somma);

