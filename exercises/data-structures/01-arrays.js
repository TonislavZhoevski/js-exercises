function analyzeNumbers(numbers) {
  let evenTotal = 0;
  let evenCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      evenTotal += number;
      evenCount++;
    }
  }

  return [evenTotal, evenCount];
}

const result = analyzeNumbers([4, 7, 2, 9, 6, 3]);

console.log(result[0]);
console.log(result[1]);
