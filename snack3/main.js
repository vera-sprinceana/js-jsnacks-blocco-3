//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti.
let somma=0;
let i=0;
while(i<5){
    numero=parseInt(prompt("inserisci un numero"));
    somma += numero;
    i++
    console.log(numero);
}
console.log(somma);
