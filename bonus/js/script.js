const submitButton = document.querySelector("#submitButton")
let numbers = document.querySelector('#num')
let condition = document.querySelector("#condition")
let winner = document.querySelector("#winner")
let pari = document.querySelector("#pari")
let disapri = document.querySelector("#disapri")

submitButton.addEventListener('click', function (event){

event.preventDefault()


    
//NUMERO RANDOM

function randomIntFromInterval (min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
const random = randomIntFromInterval(1, 5);
console.log(random)

//SOMMA TRA RANDOM E NUMERO DIGITATO DALL'UTENTE


const sum = parseInt(numbers.value) + parseInt(random)
console.log(sum)



// PARI O DISPARI & VINCITORE 


function evenOdd(even, odd){
    if(sum % 2 === 0){
        const even = pari.value
        console.log(even)
        if(even === condition.value){
            console.log("HAI VINTO")
        }else{
            console.log("HAI PERSO")
        }
    }else if(sum % 2 === 1){
        const odd = dispari.value
        console.log(odd)
        if(odd === condition.value){
            console.log("HAI VINTO")
        }else{
            console.log("HAI PERSO")
        }
        }
           return 
    }

const winLose = evenOdd()

})


