// Per ogni numero, dato un container nel DOM,
// appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3,
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 
// (seguendo le regole della Milestone 1).

const numbersContainer = document.querySelector('.numbers-container');

for(let i = 1; i <= 100; i++)  {
    let multipleNumberClassName;

    if (i % 3 === 0 && i % 5 === 0) {
        multipleNumberClassName = 'fizzbuzz';
    } else if (i % 3 === 0) {
        multipleNumberClassName = 'fizz';
    } else if (i % 5 === 0) {
        multipleNumberClassName = 'buzz';
    } else {
        multipleNumberClassName = i;
    }

    console.log(multipleNumberClassName);

    // Creazione div box
    const newBox = `<div class="box ${multipleNumberClassName}">${multipleNumberClassName}</div>`;

    // Concatenazione a numbersContainer
    numbersContainer.innerHTML += newBox;
}