// Callback
function myAsyncFunction(cb) {
  setTimeout(function() {
    cb('hello World');
  }, 1000);
}
myAsyncFunction(function(data) {
  console.log(data);
});

// Promise
function myAsyncFunction2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // resolve('hello World');
      reject('whoops');
    }, 1000);
  });
}
myAsyncFunction2()
  .then(
    function(data) {
      console.log(data);
    },
    function error(error) {
      console.log(error);
    },
  )
  .catch(function(error) {
    console.log('error', error);
  });

Promise.all([myAsyncFunction2(), myAsyncFunction2(), myAsyncFunction2()]).then(
  function(data) {},
);

// Promise.race()

// async/await
function myAsyncFunction3() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // resolve('hello World');
      reject('foo');
    }, 1000);
  });
}

async function wrapper() {
  try {
    const data = await myAsyncFunction3();
  } catch (e) {
    console.log(e);
  }
}
wrapper();

// Arrow Functions
const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (error, data) => {
  if (error) {
    throw new Error();
  }
  console.log(data);
});

[1, 2, 3].map(item => item * item);

// Destructuring,

const { readFile } = require('fs');
const arr = [1, 2, 3];
const [, number] = arr;

import { readFile } from 'fs';

const fs = require('fs');
const readFile = fs.readFile;

// let/const/var
function doSomething() {
  var foo;
  console.log(foo);
  console.log(bar);

  var foo = 'bar';
  try {
    let bar = 'foo';
  } catch (e) {}

  console.log(bar);
}
// class
class User {
  age = 42;
  constructor() {}

  getAge() {}

  static createUser() {}
}

//User.prototype.getName = function() {}
