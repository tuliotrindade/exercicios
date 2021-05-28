const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const sumNumbers = arrays.reduce((result, matriz) => {
    matriz.forEach((elemento)=> result.push(elemento))
    console.log(result)
    return result;
});
    return sumNumbers;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);