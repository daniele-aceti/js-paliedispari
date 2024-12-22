    //RICHIESTA NUMERO
    
    let num = prompt ("scrivi un numero da 1 a 5")
    if(num <= 5){
        console.log("il numero è corretto")
    }else{
        num = false
        console.log("il numero non è corretto")
    }

    //RICHIESTA PARI O DISPARI

   let condition = prompt ("inserisci pari o dispari")
    if(condition === "pari" || condition === "dispari"){
        console.log("il valore è valido")
    }else{
        condition = false
        console.log("il valore non è valido")
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

// PARI O DISPARI

function eveneOdd (){
    if(sum % 2 === 0){
        console.log("pari")
    }else if(sum % 2 === 1){
        console.log("dispari")}
    return
}

const winLose = eveneOdd()

//VINCITORE



