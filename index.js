let number = '';
let anotherNumber = '';
let result = 0;

do {
    number = +prompt('Enter a number');
    if (number === null) break
} while (isNaN(number));

do {
    anotherNumber = +prompt('Enter a second number');
    if (anotherNumber === null) break
} while (isNaN(anotherNumber));

let operation = prompt('What do you want to do? (add/mul/sub/div)');

if (operation === 'add') {
    result = number + anotherNumber;
    alert(`${number} + ${anotherNumber} = ${result}`);
} else if (operation === 'mul') {
    result = number * anotherNumber;
    alert(`${number} * ${anotherNumber} = ${result}`);
} else if (operation === 'sub') {
    result = number - anotherNumber;
    alert(`${number} - ${anotherNumber} = ${result}`);
} else if (operation === 'div') {
    result = number / anotherNumber;
    alert(`${number} / ${anotherNumber} = ${result}`);
} else if (operation !== 'sub' || operation !== 'div' || operation !== 'mul' || operation !== 'add') {
    alert('Please, choose operation from offered')
}