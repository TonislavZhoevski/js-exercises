const numbers = [12, 5, 8, 20, 3, 17];
let biggestNum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];

  if (number > biggestNum) {
    biggestNum = number;
  }
}
console.log(biggestNum);
