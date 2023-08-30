//Symmetric difference of two arrays:
const _ = require('lodash');

const arrOne = [
  { id: 20, name: 'alex' },
  { id: 30, name: 'alina' }
];

const arrTwo = [
  { id: 40, name: 'hello' },
  { id: 30, name: 'world' }
];

const symmetricDiff = _.xorWith(arrOne, arrTwo, _.isEqual);
console.log('Symmetric Difference:', symmetricDiff);

//Get all the tables:


const str = ['u', 'ec'];

const arr = [
  { storageVal: 'u', table: ['E', 'F'] },
  { storageVal: 'data', table: ['E', 'F'] },
  { storageVal: 'ec', table: ['E'] }
];

const tables = _.flatMap(_.filter(arr, item => str.includes(item.storageVal)), 'table');
console.log('Tables:', tables);


//Flatten an array:


const a = [['E'], ['F']];
const flattened = _.flatten(a);
console.log('Flattened Array:', flattened);

//Flatten and sort unique values:


const t = ['E', 'F', ['F'], ['G']];
const flattenedAndSorted = _.sortedUniq(_.flatten(t));
console.log('Flattened and Sorted Array:', flattenedAndSorted);

