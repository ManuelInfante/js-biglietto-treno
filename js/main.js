
var kilometri = parseInt(prompt('Inserisci i kilometri da percorrere'));
var eta = parseInt(prompt('Inserisci la tua età'));
var costo = 0.21 * kilometri;


if (eta < 18){
    costo = 0.8 * costo;

    document.getElementById('text').innerHTML = 'Sconto ragazzi minorenni:';

    document.getElementById('prezzo').innerHTML = costo.toFixed(2) + '€';

} else if (eta >= 65) {
    costo = 0.6 * costo;

    document.getElementById('text').innerHTML = 'Sconto per anziani con più di 65 anni:';

    document.getElementById('prezzo').innerHTML = costo.toFixed(2) + '€';
} else {

    document.getElementById('text').innerHTML = 'Il prezzo per la tua tratta è di:';

    document.getElementById('prezzo').innerHTML = costo.toFixed(2) + '€';
}