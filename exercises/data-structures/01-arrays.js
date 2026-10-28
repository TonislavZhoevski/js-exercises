function classifyNumbers(numbers) {
  let largeNumbers = [];
  let mediumNumbers = [];
  let smallNumbers = [];

  let largeCount = 0;
  let mediumCount = 0;
  let smallCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number >= 10) {
      largeNumbers.push(number);
      largeCount++;
    } else if (number >= 5) {
      mediumNumbers.push(number);
      mediumCount++;
    } else {
      smallNumbers.push(number);
      smallCount++;
    }
  }

  return [
    largeNumbers,
    mediumNumbers,
    smallNumbers,
    largeCount,
    mediumCount,
    smallCount,
  ];
}

const result = classifyNumbers([2, 5, 9, 10, 14, 4, 7]);

console.log(
  `The large-numbers-array is ${result[0]} and the count of numbers are ${result[3]} inside.`,
);
console.log(
  `The medium-numbers-array is ${result[1]} and the count of numbers are ${result[4]} inside.`,
);
console.log(
  `The small-numbers-array is ${result[2]} and the count of numbers are ${result[5]} inside.`,
);
