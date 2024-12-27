const submitButton = document.querySelector("#submitButton")
let numbers = document.querySelector('#num')
let condition = document.querySelector("#condition")
let winner = document.querySelector("#winner")
let pari = document.querySelector("#pari")
let disapri = document.querySelector("#disapri")
let systemNumber =  document.querySelector("#systemNumber")
let add = document.querySelector('#sum')

submitButton.addEventListener('click', function (event){

event.preventDefault()

//CONTROLLO NUMERO

    if(numbers.value <= 5 && numbers.value >= 0){
        console.log("il numero è corretto")
    }else{
        numbers.value = false
        console.log("il numero non è corretto")
    }


//NUMERO RANDOM

function randomIntFromInterval (min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
const random = randomIntFromInterval(1, 5);
systemNumber.innerHTML = `il mio numero è : ${random}`

//SOMMA TRA RANDOM E NUMERO DIGITATO DALL'UTENTE


const sum = parseInt(numbers.value) + parseInt(random)
add.innerHTML = `la somma dei nostri numeri è : ${sum}`



// PARI O DISPARI & VINCITORE 


const loading = setTimeout(function(){

function evenOdd(event){
    if (event % 2 === 0){
        const even = pari.value
        console.log(even)  
        return  even
    }else{
        const odd = dispari.value
        console.log(odd)
        return odd
        
        }
    }

const winLose = evenOdd(sum)
console.log(winLose)

 if(winLose === condition.value){
            console.log(winner.innerHTML = "HAI VINTO 😊")
        }else{
            console.log(winner.innerHTML = "HAI PERSO 😭")
        }

}, 1000)

})





