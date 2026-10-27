function analizeNumbers(numbers) {
  let evenTotal = 0;
  let oddTotal = 0;
  let greaterThanFiveCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      evenTotal += number;
    } else {
      oddTotal += number;
    }

    if (number > 5) {
      greaterThanFiveCount++;
    }
  }

  return [evenTotal, oddTotal, greaterThanFiveCount];
}

const result = analizeNumbers([4, 7, 2, 9, 6, 3, 10]);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
