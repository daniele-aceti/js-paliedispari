//RICHIESTA NUMERO

const controllerN = document.querySelector("#controllerN");
    
let num = prompt ("scrivi un numero da 1 a 5")
    if(num <= 5 && num >= 1){
        console.log(controllerN.innerHTML = "il numero è corretto")
    }else{
        num = null
        console.log(controllerN.innerHTML = "il numero non è corretto")
    }


//RICHIESTA PARI O DISPARI

const controllerS = document.querySelector("#controllerS");

let condition = prompt ("inserisci pari o dispari")
condition = condition.toLocaleLowerCase()
if(condition === "pari" || condition === "dispari"){
        console.log(controllerS.innerHTML = "il valore è valido")
    }else{
        condition = null
        console.log(controllerS.innerHTML = "il valore non è valido")
    }


//NUMERO RANDOM ISERITO +1 PERCHE' MAX E' MINORE E NON UGUALE AL VALORE INDICATO

    function randomInt(min, max) { 
        return Math.round(Math.random() * (max - min + 1) + min);
      }
  
const random = randomInt(1, 5);
console.log(random)
  
//SOMMA TRA RANDOM E NUMERO DIGITATO DALL'UTENTE

const sum = parseInt(num) + random
console.log(sum)

// PARI O DISPARI & VINCITORE 
const winner = document.querySelector("#winner");

  function evenOdd(event){
     if (event % 2 === 0){
        const even = "pari"
        console.log(even)  
        return  even
     }else{
       const odd = "dispari"
        console.log(odd)
        return odd
        
        }
    }

const winLose = evenOdd(sum)
console.log(winLose)

    if(winLose === condition){
            console.log(winner.innerHTML = "HAI VINTO")
        }else{
            console.log(winner.innerHTML = "HAI PERSO")
        }

    


  
   
