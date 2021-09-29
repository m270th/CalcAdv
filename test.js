let calculationLists = [
  '12 x 1 = ',
  '12 x 2 = ',
  '12 x 3 = ',
  '12 x 4 = ',
  '12 x 5 = ',
  '12 x 6 = ',
  '12 x 7 = ',
  '12 x 8 = ',
  '12 x 9 = ',
];

const button1 = document.getElementById('button1');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

let answer = 0;
let checkNumber = 0;

button1.onclick = function() {
  button1.disabled = true;
  caliculate();
  document.addEventListener('keydown', keyDown);
}

function keyDown(e) {
  if (e.key.match(/[0-9]/)) {
    if (checkNumber > 9999999) {
      console.log('error: upper limit');
    } else {
      checkNumber = checkNumber * 10 + Number(e.key);
    }
  } else if (e.key === 'Backspace'){
    checkNumber = checkNumber / 10 | 0;
  } else if (e.key === 'Enter') {
    check(checkNumber, answer);
    checkNumber = 0;
  }
  console.log(checkNumber);
  p2.textContent = checkNumber;
}

function check(checkNumber, answer) {
  if (checkNumber === answer) {
    console.log('CORRECT!');
    p3.textContent = 'CORRECT!'
  } else {
    console.log('MISTAKE');
    p3.textContent = 'MISTAKE'
  }
  checkNumber = 0;
  answer = 0;
  caliculate();
}

function caliculate () {
  const TWELVE = 12;
  let random = Math.floor(Math.random() * 100) % 9 + 1;
  p1.textContent = TWELVE + ' x ' + random + ' = ';
  answer = TWELVE * random;
  console.log('answer = ' + answer);
}