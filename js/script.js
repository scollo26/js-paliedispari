// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let parola = prompt('inserisci parola');

// let carattere = parola.split('');
// carattere = carattere.reverse();
// let palindrome = carattere.join('');

// console.log(palindrome);

let parolaInversa = palindrome(parola);

console.log(parolaInversa);

if (parola == parolaInversa) {

    console.log('parola palindrome');
    document.writeln(parola)
    document.writeln(parolaInversa + ' sono palindrome')
    
    
}else{
    console.log('non sono palindrome');
    document.writeln(parola)
    document.writeln(parolaInversa + ' non sono palindrome')
}



function palindrome(parola) {

    let palindrome = parola.split('').reverse().join('');
    return palindrome;
    
}







// // Pari e Dispari
// // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// // Generiamo un numero random (sempre da 1 a 5) per il computer
// // Sommiamo i due numeri
// // Stabiliamo se la somma dei due numeri è pari o dispari
// // Dichiariamo chi ha vinto

// let scelta = prompt('pari o dispari')
// // let numberUsers = parseInt(prompt('inserisci numero'));
// // let numbPc = parseInt(prompt('inserisci numero'));

// let numberUsers = parseInt(prompt('inserisci numero'));

// let numbPc = Math.floor(Math.random() * 5) + 1;


// console.log(numberUsers);
// console.log(numbPc);

// numberTotal = numbPc + numberUsers;

// if (numberTotal % 2 == 0) {
    
//     console.log(numberTotal )
//     // invocazione-funzione-pari
//     let valore = pari(pari);

//     // if(scelta == 'pari'){
//     //     console.log('vinto pari');
//     // }else{
//     //     console.log('hai perso pari');
//     // }

// }else if(numberTotal % 2 != 0){
//     console.log(numberTotal )
//     // invocazione-funzione-dispari
//     let valore = dispari(dispari);
//     // if(scelta == 'dispari'){
//     //     console.log('vinto dispari');
//     // }else{
//     //     console.log('hai perso dispari');
//     // }
// }


// // funzione-pari
// function pari(pari) {
//     let risultato = '';
//     if(scelta == 'pari'){
//         risultato = 'pari';
//         console.log('vinto pari');
//     }else{
//         console.log('hai perso pari');
//         risultato = 'dispari';
//     }
// return risultato
    
// }

// // funzione-dispari
// function dispari(dispari) {
//     let risultato = '';
//     if(scelta == 'dispari'){
//         risultato = 'dispari';
//         console.log('vinto dispari');
//     }else{
//         console.log('hai perso dispari');
//         risultato = 'pari';
//     }
// return risultato
    
// }