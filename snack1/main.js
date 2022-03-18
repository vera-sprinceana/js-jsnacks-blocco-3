//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let numero=[];
let somma=0;

while(somma<50){
   let numeroInserito=parseInt(prompt("inserisci un numero"));
    console.log(numeroInserito);
    numero.push(numeroInserito);
    console.log(numero);
    somma+=numeroInserito;
    
}
console.log(somma);