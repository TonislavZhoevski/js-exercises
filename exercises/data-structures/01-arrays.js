function analyzeNumbers(numbers) {
  let total = 0;
  let evenCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      total += number;
      evenCount++;
    } else {
      total -= number;
    }
  }

  return [total, evenCount];
}

const result = analyzeNumbers([3, 4, 7, 2, 6]);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
console.log(result[4]);
console.log(result[5]);
