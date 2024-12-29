const submitButton = document.querySelector("#submitButton")
let numbers = document.querySelector('#num')
let list = document.querySelector(".list")

list.classList.toggle("d-none")



submitButton.addEventListener('click', function (event){

event.preventDefault()

//CONTROLLO NUMERO

    if(numbers.value <= 5 && numbers.value >= 0){
        console.log("il numero è corretto")
    }else{
        numbers.value = ""
        alert("inserisci un valore da 1 a 5")
        return
    }


//NUMERO RANDOM ISERITO +1 PERCHE' MAX E' MINORE E NON UGUALE AL VALORE INDICATO

function randomInt(min, max) { 
    return Math.round(Math.random() * (max - min + 1) + min);
  }
  
const random = randomInt(1, 5);


//SOMMA TRA RANDOM E NUMERO DIGITATO DALL'UTENTE


const sum = parseInt(numbers.value) + parseInt(random)



// PARI O DISPARI & VINCITORE 

let winner = document.querySelector("#winner")
let pari = document.querySelector("#pari")
let disapri = document.querySelector("#disapri")

function evenOdd(event){
    if (event % 2 === 0){
        const even = pari.value  
        return  even
    }else{
        const odd = dispari.value
        return odd
        
        }
    }
let spinnerElement = document.querySelector(".spinnerElement")

spinnerElement.classList.toggle("d-none")


const loading = setTimeout(function(){
const winLose = evenOdd(sum)
let result = 0;


let condition = document.querySelector("#condition")

 if(winLose === condition.value){
            result = winner.innerHTML = "HAI VINTO 😊"
        }else{
            result = winner.innerHTML = "HAI PERSO 😭"
        }

spinnerElement.classList.toggle("d-none")
//STORICO e AGGIUNTA PARTITA
let chronology = document.querySelector('.chronology')

function memory() {
    let text = `Hai scelto il numero ${numbers.value} e ${pari.value || dispari.value}  ,${result}`

    let savedHistory = localStorage.getItem("history");

    //Aggiunta elemento

    savedHistory += `<p>${text}</p>`;

    // Salva e aggiorna la cronologia

    localStorage.setItem("history", savedHistory);
    chronology.innerHTML = `<p class="text-danger"">${savedHistory}</p>`;
}

const item = memory()

}, 2000)
})

let spinnerText = document.querySelector(".spinnerText")
let clearButton = document.querySelector("#clearButton")

//TASTO CANCELLA (PER ELIMINARE LO STORICO) ASINCRONO

clearButton.addEventListener("click", function(clearEvent){
    clearEvent.preventDefault()

    let eventDelete = localStorage.clear()
    eventDelete = confirm("Sei sicuro di voler elminare lo storico delle partite?")
    sessionStorage.removeItem("history");

//DOPO AVER CHIESTO CONFERMA FACCIAMO COMPARIRE LO SPINNER E TOGLIERE L'ACCORDION GUARDA RIGA 5


    list.classList.toggle("d-none")
    spinnerText.classList.toggle("d-none")

//DOPO DUE SECONDI RESETTIAMO 

const loadingCancel = setTimeout(function(){
    list.classList.toggle("d-none")
    spinnerText.classList.toggle("d-none")
}, 2000)

//DOPO DUE SECONDI ESEGUIAMO IL REFRESH DELLA PAGINA PER MOSTRARE L'ELIMINAZIONE DELLO STORICO

const refresh = setTimeout(function(){
    window.location.reload()
}, 2000)
})





