//RICHIESTA NUMERO

const controllerN = document.querySelector("#controllerN");
    
let num = prompt ("scrivi un numero da 1 a 5")
    if(num <= 5){
        console.log(controllerN.innerHTML = "il numero è corretto")
    }else{
        num = false
        console.log(controllerN.innerHTML = "il numero non è corretto")
    }
//RICHIESTA PARI O DISPARI

const controllerS = document.querySelector("#controllerS");

let condition = prompt ("inserisci pari o dispari")
condition = condition.toLocaleLowerCase()
    if(condition === "pari" || condition === "dispari"){
        console.log(controllerS.innerHTML = "il valore è valido")
    }else{
        condition = false
        console.log(controllerS.innerHTML = "il valore non è valido")
    }
   
//NUMERO RANDOM

function randomIntFromInterval (min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
const random = randomIntFromInterval(1, 5);
console.log(random)
  
//FUNZIONE SOMMA

function result (num1, num2) {
         return num1 + num2;
}

//SOMMA TRA RANDOM E NUMERO DIGITATO DALL'UTENTE

const sum = result(parseInt(num), random)
console.log(sum)

// PARI O DISPARI & VINCITORE 
const winner = document.querySelector("#winner");

function evenOdd(even, odd){
    if(sum % 2 === 0){
        const even = "pari"
        console.log(even)
        if(even === condition){
            console.log(winner.innerHTML = "HAI VINTO")
        }else{
            console.log(winner.innerHTML = "HAI PERSO")
        }
    }else if(sum % 2 === 1){
        const odd = "dispari"
        console.log(odd)
        if(odd === condition){
            console.log(winner.innerHTML = "HAI VINTO")
        }else{
            console.log(winner.innerHTML = "HAI PERSO")
        }
        }
           return 
    }

const winLose = evenOdd()


