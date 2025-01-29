const calcoloPreventivo = document.getElementById(`calcPreventivo`)

const costoBiglietto = document.getElementById(`price`)

//FUNZIONE PER AGGIUNGERE E RIMUOVERE CLASSI//
function aggiungiClasse(input, addClass, removeClass) {
    input.classList.add(addClass);
    input.classList.remove(removeClass);
}


calcoloPreventivo.addEventListener(`click`,function(event){
    event.preventDefault()

    //CREZIONE DELLE VARIABILI AL CLICK//

    //FUNZIONE PER CONTROLLO NUMERI NELLA STRINGA//
    function contNumeri(str) {
    const controlloStringa = /\d/; //carattere speciale che corrisponde a una cifra da 0 a 9//
    return controlloStringa.test(str);
    }


    //CONTROLLO NOME UTENTE//
    const nomeUtente = document.getElementById("nameInput").value.trim();
    if ((nomeUtente.length <= 1) || (!isNaN(nomeUtente)) || (contNumeri(nomeUtente))) {
        aggiungiClasse(nameInput, `is-invalid`, `is-valid`)
        return null
    } else {
        aggiungiClasse(nameInput, `is-valid`, `is-invalid`)
    }

    //CONTROLLO COGNOME UTENTE//
    const cognomeUtente = document.getElementById(`surnameInput`).value.trim();
    if ((cognomeUtente.length <=1) || (!isNaN(cognomeUtente)) || (contNumeri(cognomeUtente))) {
        aggiungiClasse(surnameInput, `is-invalid`, `is-valid`)
        return null
    } else {
        aggiungiClasse(surnameInput, `is-valid`, `is-invalid`)
    }

    //CONTROLLO EMAIL//
    const emailUtente = document.getElementById(`emailInput`).value;

    function validEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    if (!validEmail(emailUtente)) {
        aggiungiClasse(emailInput, `is-invalid`, `is-valid`)
        return null;
    } else {
        aggiungiClasse(emailInput, `is-valid`, `is-invalid`)
    }
    
    //CAMPO COMMENTI//
    const campoRichiesta = document.getElementById(`requestWork`).value.trim();
    if (campoRichiesta.length >= 10) {
        aggiungiClasse(requestWork, `is-valid`, `is-invalid`)
    }


    //CONTROLLO DELLA PRIVACY//
    const inputPrivacy = document.getElementById(`checkPrivacy`);
    if (!inputPrivacy.checked) {
        aggiungiClasse(checkPrivacy, `is-invalid`, `is-valid`)
        return null
    } else {
        aggiungiClasse(checkPrivacy, `is-valid`, `is-invalid`)
    }

    //CONTROLLO E ASSEGANZIONE PREZZI LAVORO SCELTO//

    function PrezzoOra(lavoro) {
        switch(lavoro) {
            case '1': // SVILUPPO BACKEND
                selectWork.classList.add(`is-valid`)
                selectWork.classList.remove(`is-invalid`)
                return 20.50;
            case '2': // SVILUPPO FRONTEND
                selectWork.classList.add(`is-valid`)
                selectWork.classList.remove(`is-invalid`)
                return 15.30;
            case '3': // ANALISI PROGETTUALE
                selectWork.classList.add(`is-valid`)
                selectWork.classList.remove(`is-invalid`)
                return 33.60;
            default:
                selectWork.classList.add(`is-invalid`)
                return null; // NESSUN LAVORO SELEZIONATO
        }
    }


    const lavoroSelezionato = document.getElementById('selectWork').value;
    const codicePromozionale = document.getElementById('discountCode').value.trim();
    const prezzoOrario = PrezzoOra(lavoroSelezionato);
    
    // VERIFICA PER CODICI SCONTO//
    const codiciValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    // CALCOLO SENZA SCONTO
    const oreLavoro = 10; // ORE DI LAVORO FISSE
    let prezzoFinale = prezzoOrario * oreLavoro;



    //CALCOLCO CON CODICI//


    if (codiciValidi.includes(codicePromozionale)) {
        prezzoFinale = prezzoFinale * 0.75
        aggiungiClasse(discountCode, `is-valid`, `is-invalid`)
    } else {
        aggiungiClasse(discountCode, `is-invalid`, `is-valid`)
    }

    const numeroIntero = Math.floor(prezzoFinale)
    const parteDecimale = prezzoFinale.toFixed(2).split(`.`)[1]

    // MOSTRA IL PREZZO FINALE//
    costoBiglietto.classList.remove('d-none');
    costoBiglietto.innerHTML = `<b>Prezzo finale<br>&nbsp;&nbsp;&nbsp;&nbsp;€${numeroIntero}</b>,${parteDecimale}`;
});