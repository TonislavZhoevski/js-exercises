function classifyNumbers(numbers) {
  let largeNumbers = [];
  let mediumNumbers = [];
  let smallNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number >= 10) {
      largeNumbers.push(number);
    } else if (number < 10 && number >= 5) {
      mediumNumbers.push(number);
    } else {
      smallNumbers.push(number);
    }
  }

  return [largeNumbers, mediumNumbers, smallNumbers];
}

const result = classifyNumbers([2, 5, 9, 10, 14, 4, 7]);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
