// Per ogni numero, data una ul nel DOM,
// aggiungete un elemento html li con il numero o la stringa corretta 
// (seguendo le regole della Milestone 1).

const mainList = document.getElementById('list');

for(let i = 1; i<= 100; i++) {
    let newItemList;

    if (i % 3 === 0 && i % 5 === 0) {
        newItemList = 'FizzBuzz';
    } else if (i % 3 === 0) {
        newItemList = 'Fizz';
    } else if (i % 5 === 0) {
        newItemList = 'Buzz';
    } else {
        newItemList = i;
    }

    mainList.innerHTML += `<li>${newItemList}</li>`;
}