// Scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

for(let i = 1; i <= 100; i++)  {
    let multipleNumber;

    if (i % 3 === 0 && i % 5 === 0) {
        multipleNumber = 'FizzBuzz';
    } else if (i % 3 === 0) {
        multipleNumber = 'Fizz';
    } else if (i % 5 === 0) {
        multipleNumber = 'Buzz';
    } else {
        multipleNumber = i;
    }

    console.log(multipleNumber);
}
