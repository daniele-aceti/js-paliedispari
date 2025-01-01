const submitButton = document.querySelector("#submitButton")
const list = document.querySelector("#list")
const numRandom = document.querySelector("#numR")

list.classList.toggle("d-none")

submitButton.addEventListener('click', function (event){
event.preventDefault()

//CONTROLLO NUMERO

const numbers = document.querySelector('#num')

    if(numbers.value <= 5 && numbers.value >= 0){
        numbers.disabled = true //AL CLICK DI BUTTON DISABILITA L'INSERIMENTO DEL NUMERO
        const loading = setTimeout(function(){
         numbers.disabled = false //DOPO LO STESSO TEMPO DI CARICAMENTO DELLO SPINNER RIABILITA L'INSERIMENTO DEL NUMERO PER UNA NUOVA PARTITA
        }, 2000)
    }else{
        alert("inserisci un valore da 1 a 5")
        return
    }


// CONTROLLO PARI E DISPARI

let condition = document.querySelector("#condition")

    if(condition.value === "pari" || condition.value === "dispari"){
        condition.disabled = true
        const loading = setTimeout(function(){
         condition.disabled = false 
        }, 2000)
    }else{
        alert("Seleziona pari o dispari")
        return
    }


//NUMERO RANDOM ISERITO +1 PERCHE' MAX E' MINORE E NON UGUALE AL VALORE INDICATO

    function randomInt(min, max) { 
        return Math.round(Math.random() * (max - min + 1) + min);
      }
  
const random = randomInt(1, 5);

//NUMERO PC

const numberPc =numRandom.innerHTML = `<p>${random}</p>`

//SOMMA TRA RANDOM E NUMERO DIGITATO DALL'UTENTE

const sum = parseInt(numbers.value) + parseInt(random)

// PARI O DISPARI & VINCITORE 

let winner = document.querySelector("#winner")
let pari = document.querySelector("#pari")
let disapri = document.querySelector("#disapri")

//FUNZIONE PER DEFINIRE PARO O DISPARO

    function evenOdd(event){
        if (event % 2 === 0){
            const even = pari.value  
            return  even
        }else{
            const odd = dispari.value
            return odd
            }
        }

// SPINNER SOPRA AL WINNER
let spinnerElement = document.querySelector(".spinnerElement")
spinnerElement.classList.toggle("d-none")

// USO LA FUNZIONE PARO O DISPARO PER DARE IL RISULTATO DEL VINCITORE

const loading = setTimeout(function(){
const winLose = evenOdd(sum)
let result = 0; //DICHIARAZIONE ED INIZIALIZZAZIONE DI RESULT PER USARLA FUORI DAL BLOCCO IF

 if(winLose === condition.value){
            result = winner.innerHTML = "HAI VINTO 😊"
        }else{
            result = winner.innerHTML = "HAI PERSO 😭"
        }

spinnerElement.classList.toggle("d-none")


function memory() {
    let text = `Hai scelto il numero ${numbers.value} e ${pari.value || dispari.value}  ,${result}`

//CONTROLLO SE LA CHIAVE HISTORY ESISTE ALTRIMENTI VIENE INIZIALIZZATA CON STRINGA VUOTA

    if (!localStorage.getItem("history")) {
        localStorage.setItem("history", "")
    }
let savedHistory = localStorage.getItem("history") ;
    
//Aggiunta elemento
    
savedHistory += `<p>${text}</p>`;

// Salva e aggiorna la cronologia
    

let chronology = document.querySelector('.chronology')

localStorage.setItem("history", savedHistory);

return chronology.innerHTML = `<p>${savedHistory}</p>`;
}

const item = memory()

}, 2000)
})

let spinnerText = document.querySelector(".spinnerText")
let clearButton = document.querySelector("#clearButton")

//TASTO CANCELLA (PER ELIMINARE LO STORICO) ASINCRONO

clearButton.addEventListener("click", function(clearEvent){
    clearEvent.preventDefault()

    let eventDelete = localStorage.clear();
    eventDelete = confirm("Sei sicuro di voler elminare lo storico delle partite?")
    

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





