/* const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
assert.strictEqual(sum(4,5),9, 'asdaddada')
assert.strictEqual(sum(0,0),0, 'asdaddada')
assert.strictEqual(sum(4,'5'),, 'asdaddada')
// implemente seus testes aqui */
/* const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
console.log(myRemove([1, 2, 3, 4],5))
assert.deepEqual(myRemove([1, 2, 3, 4],4),[1, 2, 3], 'asdaddada')
assert.notStrictEqual(myRemove([1, 2, 3, 4],4),[1, 2, 3, 4], 'asdaddada')
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'dsaskalhdkhdsakdas')

// implemente seus testes aqui */

/* const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3))
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4],4),[1, 2, 3], 'asdaddada')
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'aaaaaaaaaa')
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4], 'bbbbbbbbbbbb') */

/* const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
console.log(myFizzBuzz(2))

assert.equal(myFizzBuzz(15),'fizzbuzz', 'wwwwwwww')
assert.equal(myFizzBuzz(3),'fizz', 'wwwwwwww')
assert.equal(myFizzBuzz(5),'buzz', 'wwwwwwww')
assert.equal(myFizzBuzz('aaa'),false, 'wwwwwswww') */

/* const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1,obj2,'aaaaaaaaaaaaa') */

/* const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);
function addOne(myArray){
    for(const i in myArray){
        myArray[i]+=1;
        
    }
    console.log(typeof(myArray))
    return myArray;
}

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
 */

/* const assert = require('assert');
function wordLengths(words){
    for(const i in words){
        words[i]=words[i].length
    }
    return words;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected); */

/* const assert = require('assert');
function sumAllNumbers(numbers){
    let soma=0;
    for(const i in numbers){
        soma+=numbers[i]
    }
    return soma;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected); 
 */

/* const assert = require('assert');
function findTheNeedle(words, x){
    let posicao;
    for (let i in words){
        if(words[i]===x){
            posicao=parseInt(i)
        }
    }
    if(posicao==undefined){
        posicao=-1
    }
    return posicao;
}

 let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected); */

/* const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    people[person] =greeting+ people[person];
  }
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa'])) */

/* const removeVowels = (word) => {
  const characters = word.split('');
  const results=[];
  let c=1;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
        results.push(c);
        c+=1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
console.log(removeVowels(parameter)) */

/* const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
console.log(greaterThanTen(parameter)) */

function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
console.log(secondThirdSmallest(parameter))