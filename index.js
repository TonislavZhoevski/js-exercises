// ####################
// while and do while exercises
// ####################

/* 
const infoDiv = document.getElementById('info');

let i = 1;
while(i <= 5) {
  infoDiv.innerHTML += i + '<br>';
  i++;
}

let j = 10;
do {
  infoDiv.innerHTML += j + '<br>';
  j--;
} while (j >= 6);

let k = 1;
let sum = 0;

while (k <= 100) {
  sum += k;
  k++;
}

infoDiv.innerHTML += "Sum from 1 to 100 is: " + sum + "<br>";
 */

// ####################
//for (if...else) loops
// ####################

/* 🧠 EXERCISE 1: Print even and odd numbers from 1 to 10
Goal:
Use a for loop to iterate from 1 to 10.
Inside the loop:

If the number is even, print: Number 2 is even

If the number is odd, print: Number 1 is odd
 */

/* const infoDiv = document.getElementById('info');

for(let i = 1; i <= 10; i++) {
  if(i % 2 === 0) {
    infoDiv.innerHTML += `Number ${i} is even<br>`;
  } else {
    infoDiv.innerHTML += `Number ${i} is odd<br>`;
  }
}; */

/* 🧠 EXERCISE 2: Grade checker using nested if-else
Goal:
Loop through an array of scores and print:

"Excellent" if score ≥ 90

"Good" if score ≥ 70 and < 90

"Pass" if score ≥ 50 and < 70

"Fail" otherwise */

/* const infoDiv = document.getElementById('info');
const scores = [95, 82, 67, 45, 78, 30];

for (let i = 0; i < scores.length; i++) {
  let score = scores[i];

  if (score >= 90) {
    infoDiv.innerHTML += `You have ${score} - Exellent!<br>`;
  } else if (score >= 70 && score < 90) {
    infoDiv.innerHTML += `You have ${score} - Good!<br>`;
  } else if (score >= 50 && score < 70) {
    infoDiv.innerHTML += `You have ${score} - Pass!<br>`;
  } else {
    infoDiv.innerHTML += `You have ${score} - Fail!<br>`;
  }
} */

/* 🧠 EXERCISE 3: Nested for with if
Goal:
Print a multiplication table (1 to 5), but only print the result if the product is even. */

const infoDiv = document.getElementById('info');

for (let i = 1; i <= 5; i++) {
  for(let j = 1; j <= 5; j++) {
    let product = i * j;
    if (product % 2 === 0) {
      infoDiv.innerHTML += `${i} x ${j} = ${product}<br>`;
    }
  }
}