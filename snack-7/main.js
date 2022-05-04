const nomi = ["gabriele", "tommaso", "giorgio"];
const cognomi= ["baglioni", "marino", "carratta"];
 let listavuota = [];
 for (let i = 0; i < 3; i++) {
    const iNomi = Math.floor(Math.random() * nomi.length);
    const iCognomi = Math.floor(Math.random() * cognomi.length);

    listavuota.push(`${nomi[iNomi]} ${cognomi[iCognomi]}`);
 }
 console.log(listavuota)
// const array3 = array1.concat(array2);
//  console.log(array3);
