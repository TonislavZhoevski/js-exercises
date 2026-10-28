function analyzeNumbers(numbers) {
  let evenTotal = 0;
  let greaterThanFiveCount = 0;
  let greaterThanFiveTotal = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      evenTotal += number;
    }

    if (number > 5) {
      greaterThanFiveCount++;
      greaterThanFiveTotal += number;
    }
  }

  return [evenTotal, greaterThanFiveCount, greaterThanFiveTotal];
}

const result = analyzeNumbers([2, 8, 3, 10, 5]);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
