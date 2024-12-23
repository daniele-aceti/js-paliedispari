const word = prompt("inserisci una parola")
let arrayWord = word.split("")
console.log(arrayWord)
arrayWord = arrayWord.toString()
console.log(arrayWord)
let content = 0
   function reverseWord (word){
    content = word.split("")
    content = content.reverse()
    content = content.toString()
    console.log(content)
   }
  const reverse = reverseWord(word)

    if(content === arrayWord){
        console.log("è palindromo")
    }else{
        console.log("non è palindromo")
    }