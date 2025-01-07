let word = prompt("inserisci una parola")

//trasformo la parola in un array per confrontarla con quella invertita
let arrayWord = word.split("")
console.log(arrayWord)
arrayWord = arrayWord.join("").toLowerCase()
console.log(arrayWord)

//dichiarazione e inizializzazione della variabile content per usarla fuori della function
let content = 0;

// funzione per invertire parola
   function reverseWord (word){
    content = word.split("")
    content = content.reverse()
    content= content.join("").toLowerCase()

    console.log(content)
    return
   }

//uso la funzione per la parola inversa
  const reverse = reverseWord(word)

  //if per verificare se la parola invertita e parola inserita sono uguali (palindrome)
        
    if(content === arrayWord){
        console.log("è palindromo")
    }else{
        console.log("non è palindromo")
    }