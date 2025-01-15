const calcoloPreventivo = document.getElementById(`calcPreventivo`)

const costoBiglietto = document.getElementById(`price`)

calcoloPreventivo.addEventListener(`click`,function(event){
    event.preventDefault()

    //CREZIONE DELLE VARIABILI AL CLICK//


    //CONTROLLO NOME UTENTE//
    const nomeUtente = document.getElementById("nameInput").value.trim();
    if ((nomeUtente.length <= 1) || (!isNaN(nomeUtente))) {
        nameInput.classList.add(`is-invalid`)
        nameInput.classList.remove(`is-valid`)
        return null
    } else {
        nameInput.classList.add(`is-valid`)
        nameInput.classList.remove(`is-invalid`)
    }

    //CONTROLLO COGNOME UTENTE//
    const cognonomeUtente = document.getElementById(`surnameInput`).value.trim();
    if ((cognonomeUtente.length <=1) || (!isNaN(cognonomeUtente))) {
        surnameInput.classList.add(`is-invalid`)
        surnameInput.classList.remove(`is-valid`)
        return null
    } else {
        surnameInput.classList.add(`is-valid`)
        surnameInput.classList.remove(`is-invalid`)
    }

    //CONTROLLO EMAIL//
    const emailUtente = document.getElementById(`emailInput`).value;

    function validEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    if (!validEmail(emailUtente)) {
        emailInput.classList.add(`is-invalid`)
        emailInput.classList.remove(`is-valid`)
        return null;
    } else {
        emailInput.classList.add(`is-valid`)
        emailInput.classList.remove(`is-invalid`)
    }
    
    //CAMPO COMMENTI//
    const campoRichiesta = document.getElementById(`requestWork`).value.trim();
    if (campoRichiesta.length >= 10) {
        requestWork.classList.add(`is-valid`)
        requestWork.classList.remove(`is-invalid`)
    }


    //CONTROLLO DELLA PRIVACY//
    const inputPrivacy = document.getElementById(`checkPrivacy`);
    if (!inputPrivacy.checked) {
        checkPrivacy.classList.add(`is-invalid`)
        checkPrivacy.classList.remove(`is-valid`)
        return null
    } else {
        checkPrivacy.classList.add(`is-valid`)
        checkPrivacy.classList.remove(`is-invalid`)
    }

    //CONTROLLO E ASSEGANZIONE PREZZI LAVORO SCELTO//

    function PrezzoOra(lavoro) {
        switch(lavoro) {
            case '1': // SVILUPPO BACKEND
                selectWork.classList.add(`is-valid`)
                return 20.50;
            case '2': // SVILUPPO FRONTEND
                selectWork.classList.add(`is-valid`)
                return 15.30;
            case '3': // ANALISI PROGETTUALE
                selectWork.classList.add(`is-valid`)
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
    const prezzoFinale = prezzoOrario * oreLavoro;

    //CALCOLCO CON CODICI//
    if (codiciValidi.includes(codicePromozionale)) {
        prezzoFinale = prezzoFinale * 0.75
        discountCode.classList.add(`is-valid`)
        discountCode.classList.remove(`is-invalid`)
    } else if (codicePromozionale != codiciValidi) {
        discountCode.classList.add(`is-invalid`)
        discountCode.classList.remove(`is-valid`)
    }

    // MOSTRA IL PREZZO FINALE//
    costoBiglietto.classList.remove('d-none');
    costoBiglietto.textContent = `PREZZO FINALE: €${prezzoFinale.toFixed(2)}`;
});