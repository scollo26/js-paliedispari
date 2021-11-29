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







