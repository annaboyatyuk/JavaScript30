const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated
console.log('hello i am a %s string', 'insert');
// Styled
console.log('%c i am great text', 'font-size:30px', 'background:red');
// warning!
console.warn('warning');
// Error :|
console.error('oops');
// Info
console.info('crocodiles eat people');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong');

console.assert(1 === 1, 'that is wrong');
// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('anna');
// timing
console.time('fetching data');
// some things that take time

console.timeEnd('fetching data');
