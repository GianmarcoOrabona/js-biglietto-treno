// Chiedo all'utente il numero di chilometri che vuole percorrere
let km = Number(prompt('Quanti chilometri vuoi percorrere?'));

// Chiedo all'utente la sua età
let age = Number(prompt('Quanti anni hai?'));

// Prezzo del biglietto al km
let price = 0.21;

// Calcolo il prezzo del biglietto
let ticketPrice = km * price;

// Calcolo lo sconto per i minorenni
let priceUnder18 = (ticketPrice * 20) / 100;

// Calcolo lo sconto per gli over 65
let priceOver65 = (ticketPrice * 40) / 100;

// Valido i dati dell'utente
if (isNaN(km) || isNaN(age)) {
    alert('Inserisci dei dati corretti');
} else {
    // Calcolo il prezzo del biglietto in base all'età
    if (age >= 65) {

        // Calcolo il prezzo per gli over 65
        let discountedTicket = ticketPrice - priceOver65;
        console.log('Prezzo over 65: ' + discountedTicket.toFixed(2));
    } else if (age < 18) {

        // Calcolo il prezzo per i minorenni
        let discountedTicket = ticketPrice - priceUnder18;
        console.log('Prezzo minorenni: ' + discountedTicket.toFixed(2));
    } else {

        // Prezzo biglietto standard
        console.log('Prezzo standard: ' + ticketPrice);
    }
}