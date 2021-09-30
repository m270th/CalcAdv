const multiplyBy12 = document.getElementById('multiplyBy12');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

let checkNumber = 0;
let answer = 0;

multiplyBy12.onclick = function() {
  setTimeout(() => {
    multiplyBy12.disabled = false;
    document.removeEventListener('keydown', keyDown);
    // document.removeEventListener('keydown', asyncKeyDown);
    p1.textContent = 'Ready';
    p2.textContent = '';
    p3.textContent = '';
    checkNumber = 0;
    answer = 0;
  }, 30000);
  multiplyBy12.disabled = true;
  document.addEventListener('keydown', keyDown);
  // document.addEventListener('keydown', asyncKeyDown);
  caliculation();
}

function keyDown(event) {
  if (event.key.match(/[0-9]/)) {
    if (checkNumber > 9999999) {
      console.log('error: upper limit');
      textFloating(p3, 'ERROR: LIMIT');
    } else {
      checkNumber = checkNumber * 10 + Number(event.key);
    }
  } else if (event.key === 'Backspace'){
    checkNumber = checkNumber / 10 | 0;
  } else if (event.key === 'Enter') {
    check(checkNumber, answer);
    checkNumber = 0;
  }
  p2.textContent = checkNumber;
}

function check(checkNumber, answer) {
  if (checkNumber === answer) {
    console.log('CORRECT!');
    // correctCounter++;
    textFloating(p3, 'CORRECT!');
  } else {
    console.log('MISTAKE');
    textFloating(p3, 'MISTAKE');
  }
  checkNumber = 0;
  answer = 0;
  caliculation();
}

function caliculation() {
  const TWELVE = 12;
  let random = Math.floor(Math.random() * 100) % 9 + 1;
  answer = TWELVE * random;

  p1.textContent = TWELVE + ' x ' + random + ' = ';
  return answer;
}

function textFloating (textElement, text) {
  textElement.textContent = text;
  textElement.className = 'floiating clearly';
  setTimeout(() => {
    textElement.className = 'floating fadeOut';
  }, 800);
}

// async function onGame() {
//   let correct = 0;
//   let consecutiveCorrect = 0;
//   for(let i = 0; i<65536; i++) {
//     let answer = caliculation()
//   }
//   console.log('correct: ' + correct);
// }