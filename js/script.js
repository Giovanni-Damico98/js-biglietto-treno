/*
Il programma dovrà chiedere all'utente:
- il numero di chilometri che vuole percorrere
- l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Consigli:
Fate la scaletta degli step e commentate man mano che scrivete il codice
Usate i console.log per verificare che tutto sia a posto
Disattivate live server: può darvi problemi coi prompt.
Bonus
Stampare il prezzo finale sulla pagina invece che in console
Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto l'età e il chilometraggio 
indicati dall'utente
Abbellire col CSS
*/

// Recupero gli elementi dalla pagina html
const myDiv = document.getElementById("my-div");
const secondDiv = document.getElementById("second-div");

// Ottengo il numero di km da percorrere e lo stampo
const kmDaPercorrere = window.prompt("Quanti chilometri vuoi percorrere?", 10);
console.log("Hai scelto di percorrere: " + kmDaPercorrere + "KM.");

// Ottengo l'età del passeggero e la stampo
const etaPasseggero = window.prompt("Quanti anni ha il passeggero?", 10);
console.log(
  "L'età selezionata per il passeggero è: " + etaPasseggero + " anni."
);

// Calcolo il prezzo del biglietto senza sconto in base al numero di
// km da percorrere e lo stampo con 2 cifre decimali
let costoBiglietto = kmDaPercorrere * 0.21;
console.log("Il prezzo del biglietto è: " + costoBiglietto.toFixed(2) + ".");

// Stampo il resoconto in pagina
myDiv.innerText =
  `Hai scelto di percorrere: ${kmDaPercorrere} KM.` +
  `\n` +
  `L'età selezionata per il passeggero è: ${etaPasseggero} anni.` +
  `\n` +
  `Il prezzo del biglietto è: ${costoBiglietto.toFixed(2)}€.`;

// Prendendo in considerazione l'età del passeggero calcolo l'eventuale
// sconto da applicare e stampo il prezzo con 2 cifre decimali
// soltanto se il passeggero ha diritto ad uno sconto
if (etaPasseggero < 18) {
  costoBiglietto -= costoBiglietto * 0.2; // Applica uno sconto del 20%
  console.log(
    "Il prezzo del biglietto scontato è di: " + costoBiglietto.toFixed(2) + "€"
  );
  secondDiv.innerText = `Il prezzo del biglietto scontato è di: ${costoBiglietto.toFixed(
    2
  )}€`;
} else if (etaPasseggero > 60) {
  costoBiglietto -= costoBiglietto * 0.4; // Applica uno sconto del 40%
  console.log(
    "Il prezzo del biglietto scontato è di: " + costoBiglietto.toFixed(2) + "€"
  );
  secondDiv.innerText = `Il prezzo del biglietto scontato è di: ${costoBiglietto.toFixed(
    2
  )}€`;
}
