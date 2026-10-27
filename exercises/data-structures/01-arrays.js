function classifyNumbers(numbers) {
  let largeCount = 0;
  let mediumCount = 0;
  let smallCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number >= 10) {
      largeCount++;
    } else if (number < 10 && number >= 5) {
      mediumCount++;
    } else if (number < 5) {
      smallCount++;
    }
  }

  return [largeCount, mediumCount, smallCount];
}

const result = classifyNumbers([2, 5, 9, 10, 14, 4, 7]);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
