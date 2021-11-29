// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// primo-metodo
let parola = prompt('inserisci parola');

let parolaReverse ="";

for(let i = parola.length - 1; i >= 0; i--){
    parolaReverse = parolaReverse + parola[i];
}

console.log('parola inserita ' + parola);
console.log('parola al contrario ' + parolaReverse);



if (parola == parolaReverse) {
    console.log('la parola ' + parola + ' è palindroma');
}else {
    console.log('la parola ' + parola + ' non è palindroma');
}


// secondo metodo

// let carattere = parola.split('');
// carattere = carattere.reverse();
// let palindrome = carattere.join('');

// console.log(palindrome);

// let parolaInversa = palindrome(parola);

// console.log(parolaInversa);

// if (parola == parolaInversa) {

//     console.log('parola palindrome');
//     document.writeln(parola)
//     document.writeln(parolaInversa + ' sono palindrome')
    
    
// }else{
//     console.log('non sono palindrome');
//     document.writeln(parola)
//     document.writeln(parolaInversa + ' non sono palindrome')
// }



// function palindrome(parola) {

//     let palindrome = parola.split('').reverse().join('');
//     return palindrome;
    
// }






