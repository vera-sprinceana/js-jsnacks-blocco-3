//Fai inserire un numero, che chiameremo N, all’utente. Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.ù
let N=parseInt(prompt("inserisci un numero"));
let i =0;
while(i<N){
    let nuovoArray=[];
    for(let y=0; y<10; y++){
        nuovoArray.push(Math.floor(Math.random()* 100) +1);   
    }
        console.log(nuovoArray);
        i++;
}