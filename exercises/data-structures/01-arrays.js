function analyzeNumbers(numbers) {
  let oddNumber = 0;
  let evenCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddNumber += number;
    }
  }

  return [oddNumber, evenCount];
}

let result = analyzeNumbers([5, 2, 8, 3, 6, 7]);

console.log(result[0]);
console.log(result[1]);
