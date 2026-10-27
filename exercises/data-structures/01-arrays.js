function analyzeNumbers(numbers) {
  let evenTotal = 0;
  let oddTotal = 0;
  let sixOrMoreCount = 0;
  let belowFiveCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      evenTotal += number;
    } else {
      oddTotal += number;
    }

    if (number >= 6) {
      sixOrMoreCount++;
    }

    if (number < 5) {
      belowFiveCount++;
    }
  }

  return [evenTotal, oddTotal, sixOrMoreCount, belowFiveCount];
}

const result = analyzeNumbers([4, 7, 2, 9, 6, 3, 10, 5]);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
