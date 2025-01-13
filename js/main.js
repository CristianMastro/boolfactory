const calcoloPreventivo = document.getElementById(`calcPreventivo`)

const costoBiglietto = document.getElementById(`price`)

calcoloPreventivo.addEventListener(`click`,function(event){
    event.preventDefault()

    //CREZIONE DELLE VARIABILI AL CLICK//

    //CONTROLLO NOME UTENTE//
    const nomeUtente = document.getElementById("nameInput").value;
    if (nomeUtente.trim() === ``) {
        alert(`Inserisci il tuo nome`)
    }

    //CONTROLLO COGNOME UTENTE//
    const cognonomeUtente = document.getElementById(`surnameInput`).value
    if (cognonomeUtente.trim() === ``) {
        alert(`Inserisci il tuo cognome`)
    };

    //CONTROLLO EMAIL//
    const emailUtente = document.getElementById(`emailInput`).value;

    function validEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
    if (!validEmail(emailUtente)) {
        alert("Per favore inserisci un'email valida, ex: mariobianchi@provider.com");
        return null;
    }
    

    const campoRichiesta = document.getElementById(`requestWork`).value;

    //CONTROLLO DELLA PRIVACY//
    const inputPrivacy = document.getElementById(`checkPrivacy`);
    if (!inputPrivacy.checked) {
        alert("Devi accettare la Privacy Policy.");
        return null
    }

    function PrezzoOra(lavoro) {
        switch(lavoro) {
            case '1': // SVILUPPO BACKEND
                return 20.50;
            case '2': // SVILUPPO FRONTEND
                return 15.30;
            case '3': // ANALISI PROGETTUALE
                return 33.60;
            default:
                alert(`Seleziona un lavoro disponibile`)
                return null; // NESSUN LAVORO SELEZIONATO
        }
    }


    const lavoroSelezionato = document.getElementById('lavoroSelezionato').value;
    const codicePromozionale = document.getElementById('discountCode').value
    const prezzoOrario = PrezzoOra(lavoroSelezionato);

    // CALCOLO SENZA SCONTO
    const oreLavoro = 10; // ORE DI LAVORO FISSE
    let prezzoFinale = prezzoOrario * oreLavoro;

    // VERIFICA PER CODICI SCONTO//
    const codiciValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    if (codiciValidi.includes(codicePromozionale)) {
        prezzoFinale = prezzoFinale * 0.75
        alert('Codice promozionale valido! Sconto del 25% applicato.');
    } else if (codicePromozionale.trim() === ``) {
        alert('Codice promozionale non inserito, nessuno sconto previsto');
    } else if (codicePromozionale != codiciValidi) {
        alert(`Codice non valido, nessuno sconto previsto`)
    }

    // MOSTRA IL PREZZO FINALE//
    costoBiglietto.classList.remove('d-none');
    costoBiglietto.textContent = `PREZZO FINALE: €${prezzoFinale.toFixed(2)}`;
});